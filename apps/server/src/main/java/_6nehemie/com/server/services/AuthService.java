package _6nehemie.com.server.services;

import _6nehemie.com.server.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    
    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
