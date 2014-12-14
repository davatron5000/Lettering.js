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
arabicLetterToFormMapper["65270"] = [0xFEF6, 0xFEF6, 0xFEF6, 0xFEF5]; // LAM WITH ALEF WITH MADDA ABOVE
arabicLetterToFormMapper["65271"] = [0xFEF8, 0xFEF8, 0xFEF8, 0xFEF7]; // LAM WITH ALEF WITH HAMZA ABOVE
arabicLetterToFormMapper["65273"] = [0xFEFA, 0xFEFA, 0xFEFA, 0xFEF9]; // LAM WITH ALEF WITH HAMZA BELOW
arabicLetterToFormMapper["65276"] = [0xFEFC, 0xFEFC, 0xFEFC, 0xFEFB]; // LAM WITH ALEF


/*
@return array with two elements:
    1. hex for positional form
    2. int for merge status. 0 for no merge and 1 for merged with nextChar
 */
function lookupPositionalForm(curCharDeci, prevCharDeci, nextCharDeci) {
    var positionalForm, mergeStatus = 0;
    var wordBoundary = [" ", 9, 10, 13, 32, 40, 41, 46, 58, 1548];
    // letters with corner cases
    var noConnectAtEndLetters = [
        1570, // ALEF WITH MADDA,
        1571, // ALEF WITH HAMZA ABOVE,
        1572, // WAW WITH HAMZA ABOVE
        1573, // ALEF WITH HAMZA BELOW
        1575, // ALEF
        1583, // DAL
        1584, // THAL
        1585, // REH
        1586, // ZAIN
        1608, // WAW
        1609];// ALEF MAKSURA
    // LAM WITH ALEF, LAM WITH ALEF WITH MADDA ABOVE
    var alefs = [1570, 1571, 1573, 1575];
    if (curCharDeci == "1604" && $.inArray(nextCharDeci, alefs) != -1) {
        console.log(curCharDeci);
        var lamWithAlefDeci;
        switch (nextCharDeci) {
            case "1570":
                lamWithAlefDeci = "65270"; // LAM WITH ALEF WITH MADDA ABOVE
                break;
            case "1571":
                lamWithAlefDeci = "65271"; // LAM WITH ALEF WITH HAMZA ABOVE
                break;
            case "1573":
                lamWithAlefDeci = "65273"; // LAM WITH ALEF WITH HAMZA BELOW
                break;
            default:
                lamWithAlefDeci = "65276"; // LAM WITH ALEF
        }
        // isolated
        if (!prevCharDeci || $.inArray(prevCharDeci, wordBoundary) != -1
            || $.inArray(prevCharDeci, noConnectAtEndLetters) != -1) {
            positionalForm = arabicLetterToFormMapper[lamWithAlefDeci][3];
        }
        else {
            positionalForm = arabicLetterToFormMapper[lamWithAlefDeci][2];
        }
        mergeStatus = 1;
    }
    // previous letter is one of the noConnectAtEndLetters
    else if ($.inArray(prevCharDeci, noConnectAtEndLetters) != -1) {
        // isolated
        if( !nextCharDeci || $.inArray(nextCharDeci, wordBoundary) != -1) {
            positionalForm = arabicLetterToFormMapper[curCharDeci][3];
        }
        // initial
        else {
            positionalForm = arabicLetterToFormMapper[curCharDeci][0];
        }
    }
    // initial
    else if( !prevCharDeci || $.inArray(prevCharDeci, wordBoundary) != -1) {
        positionalForm = arabicLetterToFormMapper[curCharDeci][0];
    }
    // final
    else if( !nextCharDeci || $.inArray(nextCharDeci, wordBoundary) != -1) {
        positionalForm = arabicLetterToFormMapper[curCharDeci][2];
    }
    // medial
    else {
        positionalForm = arabicLetterToFormMapper[curCharDeci][1];
    }
    return [positionalForm, mergeStatus];
}
