/**
 * Created by zhanghuan7 on 17/3/28.
 */
// ���ݹ��������ֻ���
function checkPhone(phone, c_code) {
    var checkFlag  = true,
        zone       = new Number(""+ c_code).valueOf(),
        iptLen     = phone.length,
        firstOne   = phone.substr(0,1),
        firstTwo   = phone.substr(0,2),
        firstThree = phone.substr(0,3);
    switch(zone) {
        case 86://�й���½ 11λ ��13��14��15��18��177��170��ͷ
            if(iptLen != 11 || (firstTwo != "13" && firstTwo != "14" && firstTwo != "15" && firstTwo != "18" && firstTwo != "17")) checkFlag = false;
            break;
        case 1: //���������ô� 10λ
            if(iptLen != 10) checkFlag = false;
            break;
        case 886://̨��9λ��10λ 9λ�ĺ�����9��ͷ��10λ�ĺ�����09��ͷ
            if(firstOne == "0"){
                phone    = phone.substring(1);
                iptLen   = phone.length;
                firstOne = phone.substr(0,1);
            }
            if(iptLen != 9 || firstOne != "9") checkFlag = false;
            break;
        case 852://���8λ ��5��6��9��ͷ
            if(iptLen != 8 || (firstOne != "5" && firstOne != "6" && firstOne != "9")) checkFlag = false;
            break;
        case 853://����8λ ��6��ͷ
            if(iptLen != 8 || firstOne != "6") checkFlag = false;
            break;
        case 60://��������9λ ��1��ͷ
            if(iptLen != 9 || firstOne != "1") checkFlag = false;
            break;
        case 61://����9λ ��4��ͷ
            if(iptLen != 9 || firstOne != "4") checkFlag = false;
            break;
        case 81://�ձ�10λ ��70��80��90��ͷ
            if(iptLen != 10 || (firstTwo != "70" && firstTwo != "80" && firstTwo !="90")) checkFlag = false;
            break;
        case 82://�Ϻ�10λ ��10��11��16��17��18��19��ͷ
            if(iptLen != 10 || (firstTwo != "10" && firstTwo != "11" && firstTwo !="16" && firstTwo != "17" && firstTwo != "18" && firstTwo !="19")) checkFlag = false;
            break;
        case 850://�n��10λ ��1��ͷ
            if(iptLen != 10 || firstOne != "1") checkFlag = false;
            break;
        case 65://�¼���8λ ��8��9��ͷ
            if(iptLen != 8 || (firstOne != "8" && firstOne != "9")) checkFlag = false;
            break;
        case 44://Ӣ��10λ ��74��75��7624��77��78��79��ͷ
            var firstFour = phone.substr(0,4);
            if(iptLen != 10 || (firstTwo != "74" && firstTwo != "75" && firstFour != "7624" && firstTwo != "77" && firstTwo != "78" && firstTwo != "79")) checkFlag = false;
            break;
        case 33://����9λ ��6��73��74��75��76��77��78��ͷ
            if(iptLen != 9 || (firstOne != "6" && firstTwo != "73" && firstTwo != "74" && firstTwo != "75" && firstTwo != "76" && firstTwo != "77" && firstTwo != "78")) checkFlag = false;
            break;
        case 7://����˹10λ ��91��92��93��96��98��99��901��902��903��904��905��906��908��909��950��951��952��953��ͷ
            if(iptLen != 10 || (firstTwo != "91" && firstTwo != "92" && firstTwo != "93" && firstTwo != "96" && firstTwo != "98" && firstTwo != "99" && firstThree != "901" && firstThree != "902" && firstThree != "903" && firstThree != "904" && firstThree != "905"  && firstThree != "906"  && firstThree != "908" && firstThree != "909" && firstThree != "950"  && firstThree != "951" && firstThree != "952"  && firstThree != "953")) checkFlag = false;
            break;
        case 91://ӡ��10λ ��7��8��9��ͷ
            if(iptLen != 10 || (firstOne != "7" && firstOne != "8" && firstOne != "9")) checkFlag = false;
            break;
        case 66://̩��10λ ��08��09��ͷ
            if(firstOne == "0") {
                phone    = phone.substring(1);
                iptLen   = phone.length;
                firstOne = phone.substr(0,1);
            }
            if(iptLen != 9 || (firstOne != "8" && firstOne != "9")) checkFlag = false;
            break;
        case 49://�¹�10λ��11λ ��15��16��17��ͷ
            if((iptLen != 10 && iptLen != 11) || (firstTwo != "15" && firstTwo != "16" && firstTwo != "17")) checkFlag = false;
            break;
    }
    return checkFlag;
}