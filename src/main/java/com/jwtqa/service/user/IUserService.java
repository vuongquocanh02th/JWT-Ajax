package com.jwtqa.service.user;


import com.jwtqa.model.User;
import com.jwtqa.service.IGenericService;
import org.springframework.security.core.userdetails.UserDetails;

public interface IUserService extends IGenericService<User> {
    UserDetails loadUserByUsername(String username);
    User findByUsername(String username);
}
