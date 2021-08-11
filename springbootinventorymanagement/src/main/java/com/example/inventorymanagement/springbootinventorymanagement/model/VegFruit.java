package com.example.inventorymanagement.springbootinventorymanagement.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.hibernate.annotations.CreationTimestamp;


@Entity
@Table(name="vegfruit")
public class VegFruit {

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
    private Date stockin;

    @CreationTimestamp
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date stockout;

    // @ManyToOne(fetch = FetchType.LAZY, optional = false)
    // @JoinColumn(name = "ordercode")
    // @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    // private OrderDetails orderdetails;

    private String vfordercode;

    public VegFruit() {
    }


    public VegFruit(long id, String pcode, String pname, String pdesc, String pcatg, double pqty, double pprice,
            Date stockin, Date stockout, String vfordercode) {
        this.id = id;
        this.pcode = pcode;
        this.pname = pname;
        this.pdesc = pdesc;
        this.pcatg = pcatg;
        this.pqty = pqty;
        this.pprice = pprice;
        this.stockin = stockin;
        this.stockout = stockout;
        this.vfordercode = vfordercode;
    }

    public String getVfordercode() {
        return vfordercode;
    }

    public void setVfordercode(String vfordercode) {
        this.vfordercode = vfordercode;
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

    public Date getStockin() {
        return stockin;
    }

    public void setStockin(Date stockin) {
        this.stockin = stockin;
    }

    public Date getStockout() {
        return stockout;
    }

    public void setStockout(Date stockout) {
        this.stockout = stockout;
    }    
}
