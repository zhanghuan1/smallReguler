/**
 * Created by zhanghuan7 on 17/3/28.
 */
// 根据国家码检测手机号
function checkPhone(phone, c_code) {
    var checkFlag  = true,
        zone       = new Number(""+ c_code).valueOf(),
        iptLen     = phone.length,
        firstOne   = phone.substr(0,1),
        firstTwo   = phone.substr(0,2),
        firstThree = phone.substr(0,3);
    switch(zone) {
        case 86://中国大陆 11位 以13、14、15、18、177、170开头
            if(iptLen != 11 || (firstTwo != "13" && firstTwo != "14" && firstTwo != "15" && firstTwo != "18" && firstTwo != "17")) checkFlag = false;
            break;
        case 1: //美国、加拿大 10位
            if(iptLen != 10) checkFlag = false;
            break;
        case 886://台湾9位或10位 9位的号码以9开头，10位的号码以09开头
            if(firstOne == "0"){
                phone    = phone.substring(1);
                iptLen   = phone.length;
                firstOne = phone.substr(0,1);
            }
            if(iptLen != 9 || firstOne != "9") checkFlag = false;
            break;
        case 852://香港8位 以5、6、9开头
            if(iptLen != 8 || (firstOne != "5" && firstOne != "6" && firstOne != "9")) checkFlag = false;
            break;
        case 853://澳门8位 以6开头
            if(iptLen != 8 || firstOne != "6") checkFlag = false;
            break;
        case 60://马来西亚9位 以1开头
            if(iptLen != 9 || firstOne != "1") checkFlag = false;
            break;
        case 61://澳洲9位 以4开头
            if(iptLen != 9 || firstOne != "4") checkFlag = false;
            break;
        case 81://日本10位 以70、80、90开头
            if(iptLen != 10 || (firstTwo != "70" && firstTwo != "80" && firstTwo !="90")) checkFlag = false;
            break;
        case 82://南韩10位 以10、11、16、17、18、19开头
            if(iptLen != 10 || (firstTwo != "10" && firstTwo != "11" && firstTwo !="16" && firstTwo != "17" && firstTwo != "18" && firstTwo !="19")) checkFlag = false;
            break;
        case 850://韓國10位 以1开头
            if(iptLen != 10 || firstOne != "1") checkFlag = false;
            break;
        case 65://新加坡8位 以8、9开头
            if(iptLen != 8 || (firstOne != "8" && firstOne != "9")) checkFlag = false;
            break;
        case 44://英国10位 以74、75、7624、77、78、79开头
            var firstFour = phone.substr(0,4);
            if(iptLen != 10 || (firstTwo != "74" && firstTwo != "75" && firstFour != "7624" && firstTwo != "77" && firstTwo != "78" && firstTwo != "79")) checkFlag = false;
            break;
        case 33://法国9位 以6、73、74、75、76、77、78开头
            if(iptLen != 9 || (firstOne != "6" && firstTwo != "73" && firstTwo != "74" && firstTwo != "75" && firstTwo != "76" && firstTwo != "77" && firstTwo != "78")) checkFlag = false;
            break;
        case 7://俄罗斯10位 以91、92、93、96、98、99、901、902、903、904、905、906、908、909、950、951、952、953开头
            if(iptLen != 10 || (firstTwo != "91" && firstTwo != "92" && firstTwo != "93" && firstTwo != "96" && firstTwo != "98" && firstTwo != "99" && firstThree != "901" && firstThree != "902" && firstThree != "903" && firstThree != "904" && firstThree != "905"  && firstThree != "906"  && firstThree != "908" && firstThree != "909" && firstThree != "950"  && firstThree != "951" && firstThree != "952"  && firstThree != "953")) checkFlag = false;
            break;
        case 91://印度10位 以7、8、9开头
            if(iptLen != 10 || (firstOne != "7" && firstOne != "8" && firstOne != "9")) checkFlag = false;
            break;
        case 66://泰国10位 以08、09开头
            if(firstOne == "0") {
                phone    = phone.substring(1);
                iptLen   = phone.length;
                firstOne = phone.substr(0,1);
            }
            if(iptLen != 9 || (firstOne != "8" && firstOne != "9")) checkFlag = false;
            break;
        case 49://德国10位或11位 以15、16、17开头
            if((iptLen != 10 && iptLen != 11) || (firstTwo != "15" && firstTwo != "16" && firstTwo != "17")) checkFlag = false;
            break;
    }
    return checkFlag;
}