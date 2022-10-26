package com.ssafy.e205.db.repository;

import com.ssafy.e205.api.dto.UserDto;
import com.ssafy.e205.db.entity.UserEntity;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    @Lock(LockModeType.PESSIMISTIC_FORCE_INCREMENT)
    @QueryHints({@QueryHint(name="javax.persistence.lock.timeout", value = "10000")}) //mariaDB 에선 작동안함

    UserEntity findById(Long id);
    UserEntity findByAccessToken(String access_token);
    Optional<UserEntity> findByEmail(String email);
    List<UserEntity> findAll();
    void save(UserDto userDto);
    void deleteByEmail(String email);

    @Query(value = "select state from user_server where email = :email", nativeQuery = true)
    int findByEmailToState(@Param("email") String email);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "update user_server set state=:state where email=:email", nativeQuery = true)
    void updateState(@Param("state") int state, @Param("email") String email);
}
