QUnit.test("getCurrencyPatter method returns object", function (assert) {
    assert.expect(16);

    assert.equal(typeof CurrencyInfo.getCurrencyPattern('de_de'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('de_ch'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('en_au'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('en_ca'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('en_uk'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('en_us'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('es_es'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('it_it'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('ja'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('fr_fr'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('ir'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('cn'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('eu_pt'), 'object');        //invalid
    assert.equal(typeof CurrencyInfo.getCurrencyPattern(''), 'object');             //invalid
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('test_invalid'), 'object'); //invalid
    assert.equal(typeof CurrencyInfo.getCurrencyPattern(null), 'object'); //invalid
});

QUnit.test("Null location returns error", function(assert) {
    assert.expect(1);

    assert.equal(CurrencyInfo.getCurrencyPattern(null), null);
});

QUnit.test("Invalid Location length returns null", function(assert) {
    assert.expect(2);

    assert.equal(CurrencyInfo.getCurrencyPattern(''), null);
    assert.equal(CurrencyInfo.getCurrencyPattern('invalid'), null);
});

QUnit.test("Location for Germany (de_de) returns correct info", function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('de_de').country,"Deutschland");
    assert.equal(CurrencyInfo.getCurrencyPattern('de_de').symbol,"€" );
    assert.equal(CurrencyInfo.getCurrencyPattern('de_de').decimalSeparator,".");
});

QUnit.test("Location for Switzerland (de_ch) returns correct info", function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('de_ch').country,"Schweiz");
    assert.equal(CurrencyInfo.getCurrencyPattern('de_ch').symbol,"Fr" );
    assert.equal(CurrencyInfo.getCurrencyPattern('de_ch').decimalSeparator,"," );
});

QUnit.test("Location for Australia / New Zealand (en_au) returns correct info", function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('en_au').country,"Australia / New Zealand");
    assert.equal(CurrencyInfo.getCurrencyPattern('en_au').symbol,"AU$" );
    assert.equal(CurrencyInfo.getCurrencyPattern('en_au').decimalSeparator,"." );
});

QUnit.test("Location for Canada (en_ca) returns correct info", function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('en_ca').country,"Canada");
    assert.equal(CurrencyInfo.getCurrencyPattern('en_ca').symbol,"CA$" );
    assert.equal(CurrencyInfo.getCurrencyPattern('en_ca').decimalSeparator,"." );
});

QUnit.test("Location for United Kingdom (en_uk) returns correct info", function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('en_uk').country,"United Kingdom");
    assert.equal(CurrencyInfo.getCurrencyPattern('en_uk').symbol,"£" );
    assert.equal(CurrencyInfo.getCurrencyPattern('en_uk').decimalSeparator,"." );
});

QUnit.test("Location for USA (en_us) returns correct info", function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('en_us').country,"USA");
    assert.equal(CurrencyInfo.getCurrencyPattern('en_us').symbol,"$" );
    assert.equal(CurrencyInfo.getCurrencyPattern('en_us').decimalSeparator,"." );
});

QUnit.test("Location for Italy (it_it) returns correct info", function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('it_it').country,"Italia");
    assert.equal(CurrencyInfo.getCurrencyPattern('it_it').symbol,"€" );
    assert.equal(CurrencyInfo.getCurrencyPattern('it_it').decimalSeparator,"." );
});

QUnit.test("Location for Spain (es_es) returns correct info", function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('es_es').country,"España");
    assert.equal(CurrencyInfo.getCurrencyPattern('es_es').symbol,"€" );
    assert.equal(CurrencyInfo.getCurrencyPattern('es_es').decimalSeparator,"." );
});

QUnit.test("Location for Japan (ja) returns correct info", function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('ja').country,"Japan");
    assert.equal(CurrencyInfo.getCurrencyPattern('ja').symbol,"¥" );
    assert.equal(CurrencyInfo.getCurrencyPattern('ja').decimalSeparator,".");
});

QUnit.test("Location for Franch (fr_fr) returns correct info", function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('fr_fr').country,"France");
    assert.equal(CurrencyInfo.getCurrencyPattern('fr_fr').symbol,"€" );
    assert.equal(CurrencyInfo.getCurrencyPattern('fr_fr').decimalSeparator,"." );
});

QUnit.test("Location for Ireland (ir) returns correct info",function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('ir').country,"Ireland");
    assert.equal(CurrencyInfo.getCurrencyPattern('ir').symbol,"€");
    assert.equal(CurrencyInfo.getCurrencyPattern('ir').decimalSeparator,".");
});

QUnit.test("Location for China (cn) returns correct info",function(assert) {
    assert.expect(3);

    assert.equal(CurrencyInfo.getCurrencyPattern('cn').country, "China");
    assert.equal(CurrencyInfo.getCurrencyPattern('cn').symbol,"¥");
    assert.equal(CurrencyInfo.getCurrencyPattern('cn').decimalSeparator,".");
});

QUnit.test("Invalid Location returns default info", function(assert) {
    assert.equal(CurrencyInfo.getCurrencyPattern('en_br').country,"Deutschland");
    assert.equal(CurrencyInfo.getCurrencyPattern('pt_us').symbol,"€" );
    assert.equal(CurrencyInfo.getCurrencyPattern('it_fr').decimalSeparator,"." );
});
