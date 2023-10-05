package com.store.backend.services;


import com.store.backend.entity.User;
import com.store.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public User saveUser(User user){   //create
        if(!Objects.equals(user.getEmail(), "") && !Objects.equals(user.getUsername(), "") && !Objects.equals(user.getPassword(), "")){
            return userRepository.save(user);
        }
		return null;
       
    }
    public User validateUser(User user){   //read
        User valid = userRepository.findAllByUsername(user.getUsername());   //custom function
        if(Objects.equals(valid.getPassword(), user.getPassword())){
            return valid;
        }else {
            return null;
        }
    }
    public User updateUSer(User user){  //update
        User found = userRepository.findAllByUsername(user.getUsername());
        if(found != null){
            if(!Objects.equals(user.getPassword(),"")){   //objects is class ,Inbuilt function
                found.setPassword(user.getPassword());
            }else{
                found.setPassword(found.getPassword());
            }

            if(!Objects.equals(user.getEmail(),"")){
                found.setEmail(user.getEmail());
            }else{
                found.setEmail(found.getEmail());
            }
            return userRepository.save(found);

        }else{
            return null;
        }
    }

}
