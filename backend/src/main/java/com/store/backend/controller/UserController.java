package com.store.backend.controller;

import com.store.backend.entity.User;
import com.store.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController    //for restApi,,, To tell the compiler it's a rest controller
@RequestMapping("/Api/User")
public class UserController {
    @Autowired
    private UserService userservice;
    @CrossOrigin
    @PostMapping("/UserSignup")
    public ResponseEntity<User> Usersignup(@RequestBody User user){
        return new ResponseEntity<>(userservice.saveUser(user), HttpStatus.OK);
    }
    @CrossOrigin
    @PostMapping("/UserLogin")
    public ResponseEntity<User> Userlogin(@RequestBody User user){
     return new ResponseEntity<>(userservice.validateUser(user), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/UserUpdate")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        return new ResponseEntity<>(userservice.updateUSer(user), HttpStatus.OK);
    }



}
