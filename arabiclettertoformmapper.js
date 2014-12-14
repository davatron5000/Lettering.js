/*
 * arabiclettertoformmapper.js
 * https://github.com/nawafnaim/ArabicLetterToFormMapper
 * MIT licensed
 *
 * Copyright (C) 2014 Nawaf Alsallami
 */

var arabicLetterToFormMapper = {}; //[initial, medial, final, isolated]
arabicLetterToFormMapper["1569"] = [0xFE80, 0xFE80, 0xFE80, 0xFE80]; // HAMZA
arabicLetterToFormMapper["1570"] = [0xFE81, 0xFE82, 0xFE82, 0xFE81]; // ALEF WITH MADDA ABOVE
arabicLetterToFormMapper["1571"] = [0xFE83, 0xFE84, 0xFE84, 0xFE83]; // ALEF WITH HAMZA ABOVE
arabicLetterToFormMapper["1572"] = [0xFE85, 0xFE86, 0xFE86, 0xFE85]; // WAW WITH HAMZA ABOVE
arabicLetterToFormMapper["1573"] = [0xFE87, 0xFE88, 0xFE88, 0xFE87]; // ALEF WITH HAMZA BELOW
arabicLetterToFormMapper["1574"] = [0xFE8B, 0xFE8C, 0xFE8A, 0xFE89]; // YEH WITH HAMZA ABOVE
arabicLetterToFormMapper["1575"] = [0xFE8D, 0xFE8E, 0xFE8E, 0xFE8D]; // ALEF
arabicLetterToFormMapper["1576"] = [0xFE91, 0xFE92, 0xFE90, 0xFE8F]; // BEH
arabicLetterToFormMapper["1577"] = [0xFE93, 0xFE93, 0xFE94, 0xFE93]; // TEH MARBUTA
arabicLetterToFormMapper["1578"] = [0xFE97, 0xFE98, 0xFE96, 0xFE95]; // TEH
arabicLetterToFormMapper["1579"] = [0xFE9B, 0xFE9C, 0xFE9A, 0xFE99]; // THEH
arabicLetterToFormMapper["1580"] = [0xFE9F, 0xFEA0, 0xFE9E, 0xFE9D]; // JEEM
arabicLetterToFormMapper["1581"] = [0xFEA3, 0xFEA4, 0xFEA2, 0xFEA1]; // HAH
arabicLetterToFormMapper["1582"] = [0xFEA7, 0xFEA8, 0xFEA6, 0xFEA5]; // KHAH
arabicLetterToFormMapper["1583"] = [0xFEA9, 0xFEAA, 0xFEAA, 0xFEA9]; // DAL
arabicLetterToFormMapper["1584"] = [0xFEAB, 0xFEAC, 0xFEAC, 0xFEAB]; // THAL
arabicLetterToFormMapper["1585"] = [0xFEAD, 0xFEAE, 0xFEAE, 0xFEAD]; // REH
arabicLetterToFormMapper["1586"] = [0xFEAF, 0xFEB0, 0xFEB0, 0xFEAF]; // ZAIN
arabicLetterToFormMapper["1587"] = [0xFEB3, 0xFEB4, 0xFEB2, 0xFEB1]; // SEEN
arabicLetterToFormMapper["1588"] = [0xFEB7, 0xFEB8, 0xFEB6, 0xFEB5]; // SHEEN
arabicLetterToFormMapper["1589"] = [0xFEBB, 0xFEBC, 0xFEBA, 0xFEB9]; // SAD
arabicLetterToFormMapper["1590"] = [0xFEBF, 0xFEC0, 0xFEBE, 0xFEBD]; // DAD
arabicLetterToFormMapper["1591"] = [0xFEC3, 0xFEC4, 0xFEC2, 0xFEC1]; // TAH
arabicLetterToFormMapper["1592"] = [0xFEC7, 0xFEC8, 0xFEC6, 0xFEC5]; // ZAH
arabicLetterToFormMapper["1593"] = [0xFECB, 0xFECC, 0xFECA, 0xFEC9]; // AIN
arabicLetterToFormMapper["1594"] = [0xFECF, 0xFED0, 0xFECE, 0xFECD]; // GHAIN
arabicLetterToFormMapper["1601"] = [0xFED3, 0xFED4, 0xFED2, 0xFED1]; // FEH
arabicLetterToFormMapper["1602"] = [0xFED7, 0xFED8, 0xFED6, 0xFED5]; // QAF
arabicLetterToFormMapper["1603"] = [0xFEDB, 0xFEDC, 0xFEDA, 0xFED9]; // KAF
arabicLetterToFormMapper["1604"] = [0xFEDF, 0xFEE0, 0xFEDE, 0xFEDD]; // LAM
arabicLetterToFormMapper["1605"] = [0xFEE3, 0xFEE4, 0xFEE2, 0xFEE1]; // MEEM
arabicLetterToFormMapper["1606"] = [0xFEE7, 0xFEE8, 0xFEE6, 0xFEE5]; // NOON
arabicLetterToFormMapper["1607"] = [0xFEEB, 0xFEEC, 0xFEEA, 0xFEE9]; // HEH
arabicLetterToFormMapper["1608"] = [0xFEED, 0xFEEE, 0xFEEE, 0xFEED]; // WAW
arabicLetterToFormMapper["1609"] = [0xFEF0, 0xFEF0, 0xFEF0, 0xFEEF]; // ALEF MAKSURA
arabicLetterToFormMapper["1610"] = [0xFEF3, 0xFEF4, 0xFEF2, 0xFEF1]; // YEH


/*
letter a unicode for an arabic letter
 */
function lookupPositionalForm(curCharDeci, prevCharDeci, nextCharDeci) {
    var wordBoundary = [" ", 9, 10, 13, 32, 40, 41, 46, 58, 1548];
    // letters with corner cases
    var lettersWithCornerCases = [1570, 1571, 1572, 1573, 1575, 1583, 1584, 1585, 1586, 1608]; // ALEF WITH MADDA, WITH
    // HAMZA ABOVE, WAW WITH HAMZA ABOVE, ALEF WITH HAMZA BELOW, ALEF, DAL, THAL, REH, ZAIN, WAW
    // previous letter is one of the lettersWithCornerCases
    if ($.inArray(prevCharDeci, lettersWithCornerCases) != -1) {
        // isolated
        if( !nextCharDeci || $.inArray(nextCharDeci, wordBoundary) != -1) {
            return arabicLetterToFormMapper[curCharDeci][3];
        }
        // initial
        else {
            return arabicLetterToFormMapper[curCharDeci][0];
        }
    }
    // initial
    if( !prevCharDeci || $.inArray(prevCharDeci, wordBoundary) != -1) {
        return arabicLetterToFormMapper[curCharDeci][0];
    }
    // final
    else if( !nextCharDeci || $.inArray(nextCharDeci, wordBoundary) != -1) {
        return arabicLetterToFormMapper[curCharDeci][2];
    }
    // medial
    else {
        return arabicLetterToFormMapper[curCharDeci][1];
    }
}
