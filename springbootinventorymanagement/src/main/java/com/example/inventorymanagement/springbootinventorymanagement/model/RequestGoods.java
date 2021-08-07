package com.example.inventorymanagement.springbootinventorymanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="requestgoods")
public class RequestGoods {

   @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    
    private  String pcode;
    private String pcate;
    private String pname;
    private int qty;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getPcode() {
        return pcode;
    }
    public void setPcode(String pcode) {
        this.pcode = pcode;
    }
    public String getPcate() {
        return pcate;
    }
    public void setPcate(String pcate) {
        this.pcate = pcate;
    }
    public String getPname() {
        return pname;
    }
    public void setPname(String pname) {
        this.pname = pname;
    }
    public int getQty() {
        return qty;
    }
    public void setQty(int qty) {
        this.qty = qty;
    }
    public RequestGoods() {
    }
    public RequestGoods(int id, String pcode, String pcate, String pname, int qty) {
        this.id = id;
        this.pcode = pcode;
        this.pcate = pcate;
        this.pname = pname;
        this.qty = qty;
    }
    @Override
    public String toString() {
        return "RequestGoods [id=" + id + ", pcate=" + pcate + ", pcode=" + pcode + ", pname=" + pname + ", qty=" + qty
                + "]";
    }


}
