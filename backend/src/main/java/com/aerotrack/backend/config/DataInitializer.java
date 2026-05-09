package com.aerotrack.backend.config;

import com.aerotrack.backend.entity.*;
import com.aerotrack.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {

        if (userRepository.findByUsername("admin@test.com").isEmpty()) {

            User admin = new User();
            admin.setUsername("admin@test.com");
            admin.setPassword(passwordEncoder.encode("test"));
            admin.setRole(Role.ADMIN);

            userRepository.save(admin);
        }

        if (userRepository.findByUsername("user@test.com").isEmpty()) {

            User user = new User();
            user.setUsername("user@test.com");
            user.setPassword(passwordEncoder.encode("test"));
            user.setRole(Role.USER);

            userRepository.save(user);
        }
    }
}