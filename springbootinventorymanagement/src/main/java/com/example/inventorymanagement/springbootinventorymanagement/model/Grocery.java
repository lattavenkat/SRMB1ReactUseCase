package com.example.inventorymanagement.springbootinventorymanagement.model;

import javax.persistence.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.hibernate.annotations.CreationTimestamp;


@Entity
@Table(name = "grocery")
public class Grocery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String pcode;

    private String pname;

    private String pdesc;

    private String pcatg;

    private double pqty;

    private double pprice;

    @CreationTimestamp
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date manuDate;

    @CreationTimestamp
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date expDate;

    // @ManyToOne(fetch = FetchType.LAZY, optional = false)
    // @JoinColumn(name = "ordercode")
    // @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    // private OrderDetails orderdetails;

    private String gordercode;

    

    public Grocery() {
    }
    

    public Grocery(int id, String pcode, String pname, String pdesc, String pcatg, double pqty, double pprice,
            Date manuDate, Date expDate, String gordercode) {
        this.id = id;
        this.pcode = pcode;
        this.pname = pname;
        this.pdesc = pdesc;
        this.pcatg = pcatg;
        this.pqty = pqty;
        this.pprice = pprice;
        this.manuDate = manuDate;
        this.expDate = expDate;
        this.gordercode = gordercode;
    }


    public String getGordercode() {
        return gordercode;
    }


    public void setGordercode(String gordercode) {
        this.gordercode = gordercode;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPcode() {
        return pcode;
    }

    public void setPcode(String pcode) {
        this.pcode = pcode;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getPdesc() {
        return pdesc;
    }

    public void setPdesc(String pdesc) {
        this.pdesc = pdesc;
    }

    public String getPcatg() {
        return pcatg;
    }

    public void setPcatg(String pcatg) {
        this.pcatg = pcatg;
    }

    public double getPqty() {
        return pqty;
    }

    public void setPqty(double pqty) {
        this.pqty = pqty;
    }

    public double getPprice() {
        return pprice;
    }

    public void setPprice(double pprice) {
        this.pprice = pprice;
    }

    public Date getManuDate() {
        return manuDate;
    }

    public void setManuDate(Date manuDate) {
        this.manuDate = manuDate;
    }

    public Date getExpDate() {
        return expDate;
    }

    public void setExpDate(Date expDate) {
        this.expDate = expDate;
    }    
    
}
