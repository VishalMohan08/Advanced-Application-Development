package com.loan.agri.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.loan.agri.dto.UserDTO;
import com.loan.agri.entity.User;
import com.loan.agri.repository.UserRepository;
import com.loan.agri.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(UserDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setMobileNumber(userDTO.getMobileNumber());
        user.setPassword(userDTO.getPassword());
        return userRepository.save(user);
    }

    @Override
    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            UserDTO userDTO = new UserDTO();
            userDTO.setName(user.getName());
            userDTO.setMobileNumber(user.getMobileNumber());
            return userDTO;
        }
        return null;
    }
}
