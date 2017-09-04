var CurrencyInfo = (function() {
    var currencies =
        {
            de_de: {
                country: 'Deutschland',
                symbol: '€',
                decimalSeparator: ',',
                thousandSeparator: ' '
            },

            de_ch: {
                country: 'Schweiz',
                symbol: 'Fr',
                decimalSeparator: '.',
                thousandSeparator: ' '
            },

            en_au: {
                country: 'Australia / New Zealand',
                symbol: 'AU$',
                decimalSeparator: '.',
                thousandSeparator: ','
            },

            en_ca: {
                country: 'Canada',
                symbol: 'CA$',
                decimalSeparator: '.',
                thousandSeparator: ' '
            },

            en_uk:  {
                country: 'United Kingdom',
                symbol: '£',
                decimalSeparator: '.',
                thousandSeparator: ','
            },

            en_us : {
                country: 'USA',
                symbol: '$',
                decimalSeparator: '.',
                thousandSeparator: ','
            },

            es_es: {
                country: 'España',
                symbol: '€',
                decimalSeparator: ',',
                thousandSeparator: ' '
            },

            it_it: {
                country: 'Italia',
                symbol: '€',
                decimalSeparator: ',',
                thousandSeparator: ' '
            },

            en_jp: {
                country: 'Japan',
                symbol: '¥',
                decimalSeparator: '.',
                thousandSeparator: ','
            },

            fr_fr: {
                country: 'France',
                symbol: '€',
                decimalSeparator: ',',
                thousandSeparator: ' '
            },

            pl_pl: {
                country: 'Polska',
                symbol: 'zł',
                decimalSeparator: ',',
                thousandSeparator: ' '
            }
    };

    var defaultCurrency = currencies.de_de;

    var getCurrencyPattern = function(location) {

        if (!isLocationValid(location)) return null;

        //no location found: return the default
        if (typeof currencies[location] === 'undefined')
            return defaultCurrency;

        return currencies[location];
    };

    function isLocationValid(location) {

        if (
            location == null ||
            location.length > 5 ||
            location.length === 0
        )
            return false;

        return true;
    }

    return {
        getCurrencyPattern: getCurrencyPattern
    };
})();
