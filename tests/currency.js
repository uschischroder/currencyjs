QUnit.test('getCurrencyPatter method returns object', function (assert) {
    assert.expect(15);

    assert.equal(typeof CurrencyInfo.getCurrencyPattern('de_de'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('de_ch'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('en_au'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('en_ca'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('en_uk'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('en_us'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('es_es'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('it_it'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('en_jp'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('fr_fr'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('pl_pl'), 'object');
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('eu_pt'), 'object');        //invalid
    assert.equal(typeof CurrencyInfo.getCurrencyPattern(''), 'object');             //invalid
    assert.equal(typeof CurrencyInfo.getCurrencyPattern('test_invalid'), 'object'); //invalid
    assert.equal(typeof CurrencyInfo.getCurrencyPattern(null), 'object');           //invalid
});

QUnit.test('Null location returns error', function(assert) {
    assert.expect(1);

    assert.equal(CurrencyInfo.getCurrencyPattern(null), null);
});

QUnit.test('Invalid Location length returns null', function(assert) {
    assert.expect(2);

    assert.equal(CurrencyInfo.getCurrencyPattern(''), null);
    assert.equal(CurrencyInfo.getCurrencyPattern('invalid'), null);
});

QUnit.test('Location for Germany (de_de) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('de_de').country, 'Deutschland');
    assert.equal(CurrencyInfo.getCurrencyPattern('de_de').symbol, '€');
    assert.equal(CurrencyInfo.getCurrencyPattern('de_de').decimalSeparator, ',');
    assert.equal(CurrencyInfo.getCurrencyPattern('de_de').thousandSeparator, ' ');
});

QUnit.test('Location for Switzerland (de_ch) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('de_ch').country, 'Schweiz');
    assert.equal(CurrencyInfo.getCurrencyPattern('de_ch').symbol, 'Fr');
    assert.equal(CurrencyInfo.getCurrencyPattern('de_ch').decimalSeparator, '.');
    assert.equal(CurrencyInfo.getCurrencyPattern('de_ch').thousandSeparator, ' ');
});

QUnit.test('Location for Australia / New Zealand (en_au) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('en_au').country, 'Australia / New Zealand');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_au').symbol, 'AU$');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_au').decimalSeparator, '.');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_au').thousandSeparator, ',');
});

QUnit.test('Location for Canada (en_ca) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('en_ca').country, 'Canada');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_ca').symbol, 'CA$');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_ca').decimalSeparator, '.');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_ca').thousandSeparator, ' ');
});

QUnit.test('Location for United Kingdom (en_uk) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('en_uk').country, 'United Kingdom');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_uk').symbol, '£');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_uk').decimalSeparator, '.');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_uk').thousandSeparator, ',');
});

QUnit.test('Location for USA (en_us) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('en_us').country, 'USA');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_us').symbol, '$');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_us').decimalSeparator, '.');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_us').thousandSeparator, ',');
});

QUnit.test('Location for Spain (es_es) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('es_es').country, 'España');
    assert.equal(CurrencyInfo.getCurrencyPattern('es_es').symbol, '€');
    assert.equal(CurrencyInfo.getCurrencyPattern('es_es').decimalSeparator, ',');
    assert.equal(CurrencyInfo.getCurrencyPattern('es_es').thousandSeparator, ' ');
});

QUnit.test('Location for Italy (it_it) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('it_it').country, 'Italia');
    assert.equal(CurrencyInfo.getCurrencyPattern('it_it').symbol, '€');
    assert.equal(CurrencyInfo.getCurrencyPattern('it_it').decimalSeparator, ',');
    assert.equal(CurrencyInfo.getCurrencyPattern('it_it').thousandSeparator, ' ');
});

QUnit.test('Location for Japan (en_jp) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('en_jp').country, 'Japan');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_jp').symbol, '¥');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_jp').decimalSeparator, '.');
    assert.equal(CurrencyInfo.getCurrencyPattern('en_jp').thousandSeparator, ',');
});

QUnit.test('Location for France (fr_fr) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('fr_fr').country, 'France');
    assert.equal(CurrencyInfo.getCurrencyPattern('fr_fr').symbol, '€');
    assert.equal(CurrencyInfo.getCurrencyPattern('fr_fr').decimalSeparator, ',');
    assert.equal(CurrencyInfo.getCurrencyPattern('fr_fr').thousandSeparator, ' ');
});

QUnit.test('Location for Poland (pl_pl) returns correct info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('pl_pl').country, 'Polska');
    assert.equal(CurrencyInfo.getCurrencyPattern('pl_pl').symbol, 'zł');
    assert.equal(CurrencyInfo.getCurrencyPattern('pl_pl').decimalSeparator, ',');
    assert.equal(CurrencyInfo.getCurrencyPattern('pl_pl').thousandSeparator, ' ');
});

QUnit.test('Invalid Location returns default info', function(assert) {
    assert.expect(4);

    assert.equal(CurrencyInfo.getCurrencyPattern('en_br').country, 'Deutschland');
    assert.equal(CurrencyInfo.getCurrencyPattern('pt_us').symbol, '€');
    assert.equal(CurrencyInfo.getCurrencyPattern('it_fr').decimalSeparator, ',');
    assert.equal(CurrencyInfo.getCurrencyPattern('jp_ch').thousandSeparator, ' ');
});
