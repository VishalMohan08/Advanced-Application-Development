package com.loan.agri.service;

import com.loan.agri.dto.UserDTO;
import com.loan.agri.entity.User;

public interface UserService {
    User createUser(UserDTO userDTO);
    UserDTO getUserById(Long id);

}
