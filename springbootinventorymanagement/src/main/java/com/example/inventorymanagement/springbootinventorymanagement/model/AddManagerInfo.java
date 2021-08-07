package com.example.inventorymanagement.springbootinventorymanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="managerinfo")
public class AddManagerInfo {
    @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;
  private String managerid;
  private  String managerfname;
  private String managerlname;
  private String managerpass;
  private String manageremail;
  private String managermob;
public AddManagerInfo() {
}
public AddManagerInfo(int id, String managerid, String managerfname,String managerpass, String managerlname, String manageremail,
        String managermob) {
    this.id = id;
    this.managerid = managerid;
    this.managerfname = managerfname;
    this.managerlname = managerlname;
    this.managerpass=managerpass;
    this.manageremail = manageremail;
    this.managermob = managermob;
}
public int getId() {
    return id;
}
public void setId(int id) {
    this.id = id;
}
public String getManagerid() {
    return managerid;
}
public void setManagerid(String managerid) {
    this.managerid = managerid;
}
public String getManagerfname() {
    return managerfname;
}
public void setManagerfname(String managerfname) {
    this.managerfname = managerfname;
}
public String getManagerlname() {
    return managerlname;
}
public void setManagerlname(String managerlname) {
    this.managerlname = managerlname;
}
public String getManagerpass() {
    return managerpass;
}
public void setManagerpass(String managerpass) {
    this.managerpass = managerpass;
}
public String getManageremail() {
    return manageremail;
}
public void setManageremail(String manageremail) {
    this.manageremail = manageremail;
}
public String getManagermob() {
    return managermob;
}
public void setManagermob(String managermob) {
    this.managermob = managermob;
}
@Override
public String toString() {
    return "AddManagerInfo [id=" + id + ", manageremail=" + manageremail + ", managerfname=" + managerfname
            + ", managerid=" + managerid + ", managerlname=" + managerlname + ", managermobile=" + managermob
            + ", managerpass=" + managerpass + "]";
}

  
}
