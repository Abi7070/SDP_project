package com.mindfuloasis.mentalhealthapp.repository;

import com.mindfuloasis.mentalhealthapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findById(int id);

    Optional<User> findByEmailAndPassword(String email, String password); // Custom method for login
}
