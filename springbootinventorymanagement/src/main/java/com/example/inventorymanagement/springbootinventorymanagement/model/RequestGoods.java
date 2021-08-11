package com.example.inventorymanagement.springbootinventorymanagement.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "requestgoods")
public class RequestGoods {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String ordercode;
    private String productname;
    private String productcode;
    private String productcatg;
    private String productprice;
    private String productqty;

    private Date requestDate;

    // @GeneratedValue(generator = "UUID")
    // @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    // @Column(name = "requestId", updatable = false, nullable = false)
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long requestId;

    private String vendorId;
    private String vendorName;


    public RequestGoods() {
    }


    public RequestGoods(long id, String ordercode, String productname, String productcode, String productcatg,
            String productprice, String productqty, Date requestDate, long requestId, String vendorId,
            String vendorName) {
        this.id = id;
        this.ordercode = ordercode;
        this.productname = productname;
        this.productcode = productcode;
        this.productcatg = productcatg;
        this.productprice = productprice;
        this.productqty = productqty;
        this.requestDate = requestDate;
        this.requestId = requestId;
        this.vendorId = vendorId;
        this.vendorName = vendorName;
    }


    public long getId() {
        return id;
    }


    public void setId(long id) {
        this.id = id;
    }


    public String getOrdercode() {
        return ordercode;
    }


    public void setOrdercode(String ordercode) {
        this.ordercode = ordercode;
    }


    public String getProductname() {
        return productname;
    }


    public void setProductname(String productname) {
        this.productname = productname;
    }


    public String getProductcode() {
        return productcode;
    }


    public void setProductcode(String productcode) {
        this.productcode = productcode;
    }


    public String getProductcatg() {
        return productcatg;
    }


    public void setProductcatg(String productcatg) {
        this.productcatg = productcatg;
    }


    public String getProductprice() {
        return productprice;
    }


    public void setProductprice(String productprice) {
        this.productprice = productprice;
    }


    public String getProductqty() {
        return productqty;
    }


    public void setProductqty(String productqty) {
        this.productqty = productqty;
    }


    public Date getRequestDate() {
        return requestDate;
    }


    public void setRequestDate(Date requestDate) {
        this.requestDate = requestDate;
    }


    public long getRequestId() {
        return requestId;
    }


    public void setRequestId(long requestId) {
        this.requestId = requestId;
    }


    public String getVendorId() {
        return vendorId;
    }


    public void setVendorId(String vendorId) {
        this.vendorId = vendorId;
    }


    public String getVendorName() {
        return vendorName;
    }


    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }
}
