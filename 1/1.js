function get_no() {
    //テキストボックスから税込みをとる
    var no_7 = document.getElementById("7").value;
    var no_8 = document.getElementById("8").value;
    var no_9 = document.getElementById("9").value;
    var no_10 = document.getElementById("10").value;
    var no_11 = document.getElementById("11").value;
    var no_12 = document.getElementById("12").value;
    
    return {
        no_7,no_8,no_9,no_10,no_11,no_12        
      };
}

function division_1tenn1(money_1){
    //÷1.1
    var money_2=Math.floor(money_1/1.1);    
    
    return money_2;
}

function clickBtn1(){
    get_no;
    
    //税込み
    var no_7 = get_no().no_7;
    var no_8 = get_no().no_8;
    var no_9 = get_no().no_9;
    var no_10 = get_no().no_10;
    var no_11 = get_no().no_11;
    var no_12 = get_no().no_12;
    
    //税抜き
    var tax_excluded_no7=division_1tenn1(no_7);
    console.log("税抜きno_7="+tax_excluded_no7);
    var tax_excluded_no8=division_1tenn1(no_8);
    console.log("税抜きno_8="+tax_excluded_no8);
    var tax_excluded_no9=division_1tenn1(no_9);
    console.log("税抜きno_9="+tax_excluded_no9);
    var tax_excluded_no10=division_1tenn1(no_10);
    console.log("税抜きno_10="+tax_excluded_no10);
    var tax_excluded_no11=division_1tenn1(no_11);
    console.log("税抜きno_11="+tax_excluded_no11);
    var tax_excluded_no12=division_1tenn1(no_12);
    console.log("税抜きno_12="+tax_excluded_no12);
    
    //7~12の合計
    var no_6=tax_excluded_no7+tax_excluded_no8+tax_excluded_no9+tax_excluded_no10+tax_excluded_no11+tax_excluded_no12;
    console.log("合計no_6="+no_6);
    
    //売上割合
    var Percentage_of_sales_no_7=Math.floor((tax_excluded_no7/no_6)*100*10)/10;
    console.log("売上割合no_7(%)="+Percentage_of_sales_no_7);
    var Percentage_of_sales_no_8=Math.floor((tax_excluded_no8/no_6)*100*10)/10;
    console.log("売上割合no_8(%)="+Percentage_of_sales_no_8);
    var Percentage_of_sales_no_9=Math.floor((tax_excluded_no9/no_6)*100*10)/10;
    console.log("売上割合no_9(%)="+Percentage_of_sales_no_9);
    var Percentage_of_sales_no_10=Math.floor((tax_excluded_no10/no_6)*100*10)/10;
    console.log("売上割合no_10(%)="+Percentage_of_sales_no_10);
    var Percentage_of_sales_no_11=Math.floor((tax_excluded_no11/no_6)*100*10)/10;
    console.log("売上割合no_11(%)="+Percentage_of_sales_no_11);
    var Percentage_of_sales_no_12=Math.floor((tax_excluded_no12/no_6)*100*10)/10;
    console.log("売上割合no_12(%)="+Percentage_of_sales_no_12);

    //課税標準額の対する消費税額
    var no_1=Math.floor(no_6/1000)*1000*7.8/100;
    console.log("no_1="+no_1);

    //no_4
    var no_4=no_1;
    console.log("no_4="+no_4);
    
    //＊7.8%
    var no_14=multiplication_7tenn8(tax_excluded_no7);
    console.log("no_14="+no_14);
    var no_15=multiplication_7tenn8(tax_excluded_no8);
    console.log("no_15="+no_15);
    var no_16=multiplication_7tenn8(tax_excluded_no9);
    console.log("no_16="+no_16);
    var no_17=multiplication_7tenn8(tax_excluded_no10);
    console.log("no_17="+no_17);
    var no_18=multiplication_7tenn8(tax_excluded_no11);
    console.log("no_18="+no_18);
    var no_19=multiplication_7tenn8(tax_excluded_no12);
    console.log("no_19="+no_19);
    
    //14~19の合計
    var no_13=no_14+no_15+no_16+no_17+no_18+no_19;
    console.log("合計no_13="+no_13);


    //原則計算
    var no_20=Math.floor(no_4*((no_14*90/100)+(no_15*80/100)+(no_16*70/100)+(no_17*60/100)+(no_18*50/100)+(no_19*40/100))/no_13);
    console.log("no_20="+no_20);

    //特例(一種類の事業で７５％以上)
    var max_percent_21 = Math.max(Percentage_of_sales_no_7,Percentage_of_sales_no_8,Percentage_of_sales_no_9,
        Percentage_of_sales_no_10,Percentage_of_sales_no_11,Percentage_of_sales_no_12);
        console.log("%="+max_percent_21);

        var no_21_14=0;
        var no_21_15=0;
        var no_21_16=0;
        var no_21_17=0;
        var no_21_18=0;
        var no_21_19=0;

    if(max_percent_21>=75){
        if(max_percent_21==Percentage_of_sales_no_7){
            no_21_14=Math.floor(no_4*90/100);
            console.log("no_21_14="+no_21_14);
        }else if(max_percent_21==Percentage_of_sales_no_8){
            no_21_15=Math.floor(no_4*80/100);
            console.log("no_21_15="+no_21_15);
        }else if(max_percent_21==Percentage_of_sales_no_9){
            no_21_16=Math.floor(no_4*70/100);
            console.log("no_21_16="+no_21_16);
        }else if(max_percent_21==Percentage_of_sales_no_10){
            no_21_17=Math.floor(no_4*60/100);
            console.log("no_21_17="+no_21_17);
        }else if(max_percent_21==Percentage_of_sales_no_11){
            no_21_18=Math.floor(no_4*50/100);
            console.log("no_21_18="+no_21_18);
        }else if(max_percent_21==Percentage_of_sales_no_11){
            no_21_19=Math.floor(no_4*60/100);
            console.log("no_21_19="+no_21_19);
        }
        
        var max_21=0;
        max_21 = Math.max(no_21_14,no_21_15,no_21_16,no_21_17,no_21_18,no_21_19);
        console.log("max_21="+max_21);
    }
    
    var no_22=0;
    var no_23=0;
    var no_24=0;
    var no_25=0;
    var no_26=0;
    var no_27=0;
    var no_28=0;
    var no_29=0;
    var no_30=0;
    var no_31=0;
    var no_32=0;
    var no_33=0;
    var no_34=0;
    var no_35=0;
    var no_36=0;

    //二種類以上の事業で７５％以上
    if(Percentage_of_sales_no_7+Percentage_of_sales_no_8>=75){
        no_22=Math.floor(no_4*(no_14*90/100+(no_13-no_14)*80/100)/no_13);
        console.log("no_22="+no_22);
    }
    if(Percentage_of_sales_no_7+Percentage_of_sales_no_9>=75){
        no_23=Math.floor(no_4*(no_14*90/100+(no_13-no_14)*70/100)/no_13);
        console.log("no_23="+no_23);
    }
    if(Percentage_of_sales_no_7+Percentage_of_sales_no_10>=75){
        no_24=Math.floor(no_4*(no_14*90/100+(no_13-no_14)*60/100)/no_13);
        console.log("no_24="+no_24);
    }
    if(Percentage_of_sales_no_7+Percentage_of_sales_no_11>=75){
        no_25=Math.floor(no_4*(no_14*90/100+(no_13-no_14)*50/100)/no_13);
        console.log("no_25="+no_25);
    }
    if(Percentage_of_sales_no_7+Percentage_of_sales_no_12>=75){
        no_26=Math.floor(no_4*(no_14*90/100+(no_13-no_14)*40/100)/no_13);
        console.log("no_26="+no_26);
    }
    if(Percentage_of_sales_no_8+Percentage_of_sales_no_9>=75){
        no_27=Math.floor(no_4*(no_15*80/100+(no_13-no_15)*70/100)/no_13);
        console.log("no_27="+no_27);
    }
    if(Percentage_of_sales_no_8+Percentage_of_sales_no_10>=75){
        no_28=Math.floor(no_4*(no_15*80/100+(no_13-no_15)*60/100)/no_13);
        console.log("no_28="+no_28);
    }
    if(Percentage_of_sales_no_8+Percentage_of_sales_no_11>=75){
        no_29=Math.floor(no_4*(no_15*80/100+(no_13-no_15)*50/100)/no_13);
        console.log("no_29="+no_29);
    }
    if(Percentage_of_sales_no_8+Percentage_of_sales_no_12>=75){
        no_30=Math.floor(no_4*(no_15*80/100+(no_13-no_15)*40/100)/no_13);
        console.log("no_30="+no_30);
    }
    if(Percentage_of_sales_no_9+Percentage_of_sales_no_10>=75){
        no_31=Math.floor(no_4*(no_16*70/100+(no_13-no_16)*60/100)/no_13);
        console.log("no_31="+no_31);
    }
    if(Percentage_of_sales_no_9+Percentage_of_sales_no_11>=75){
        no_32=Math.floor(no_4*(no_16*70/100+(no_13-no_16)*50/100)/no_13);
        console.log("no_32="+no_32);
    }
    if(Percentage_of_sales_no_9+Percentage_of_sales_no_12>=75){
        no_33=Math.floor(no_4*(no_16*70/100+(no_13-no_16)*40/100)/no_13);
        console.log("no_33="+no_33);
    }
    if(Percentage_of_sales_no_10+Percentage_of_sales_no_11>=75){
        no_34=Math.floor(no_4*(no_17*60/100+(no_13-no_17)*50/100)/no_13);
        console.log("no_34="+no_34);
    }
    if(Percentage_of_sales_no_10+Percentage_of_sales_no_12>=75){
        no_35=Math.floor(no_4*(no_17*60/100+(no_13-no_17)*40/100)/no_13);
        console.log("no_35="+no_35);
    }
    if(Percentage_of_sales_no_11+Percentage_of_sales_no_12>=75){
        no_36=Math.floor(no_4*(no_18*50/100+(no_13-no_18)*40/100)/no_13);
        console.log("no_36="+no_36);
    }

    var max_percent_75=0;
        max_percent_75 = Math.max(no_22,no_23,no_24,no_25,no_26,no_27,no_28,no_29,no_30,no_31,no_32,no_33,no_34,no_35,no_36);
        console.log("max_percent_75="+max_percent_75);

    //一番でかいもの
    var max=Math.max(no_20,max_21,max_percent_75);
    console.log(max);

    var no_4_max=Math.floor((no_4-max)/100)*100;
    var ah_22=Math.floor(no_4_max*2.2/7.8);
    var end=no_4_max+ah_22;

    //表示
    var result4 = document.getElementById('4');
    result4.innerHTML = `課税標準額に対する消費税額　　：${no_4}`;
    var result = document.getElementById('result');
    result.innerHTML = `控除対象仕入れ税額　　　　　　：${max}`;
    var ah = document.getElementById('ah');
    ah.innerHTML = `消費税額　　　　　　　　　　　：${no_4_max}`;
    var Local_consumption_tax = document.getElementById('Local_consumption_tax');
    Local_consumption_tax.innerHTML = `地方消費税額　　　　　　　　　：${ah_22}`;
    var total = document.getElementById('total');
    total.innerHTML = `消費税額及び地方消費税額の合計：${end}`;
}

function multiplication_7tenn8(money_3){
    //＊7.8
    var money_4=Math.floor(money_3*7.8/100);
    
    return money_4;
}

