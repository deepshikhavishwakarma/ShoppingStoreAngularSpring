package com.store.backend.entity;

// import jakarta.persistence.Entity;
// import jakarta.persistence.Id;


public class CheckoutRequest {

    private Long userId;
    private String shippingAddress;
    private String pinCode;
    public CheckoutRequest() {
    }
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public String getShippingAddress() {
        return shippingAddress;
    }
    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }
    public String getPinCode() {
        return pinCode;
    }
    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

}
