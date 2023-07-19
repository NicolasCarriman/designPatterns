type paymentTypes = 'credit' | 'cash' | 'debit' | 'cripto';
type comunicationTypes = 'moreInformation' | 'moreHistory';

const customerPreferencesModule = (function () {
  let productPreferences: string[] = [];

  let paymentPreferences: paymentTypes[] = [];

  let shipmentPreferences = {
    shipmentMethod: '',
    shipmentTime: 0,
    shipmentOptions: {
      testing: false,
      demoVersion: false,
      personalizedAttention: false,
      discounts: false,
      productRecommendations: false,
    }
  };

  let entretenimentPreferences = [];

  let confortPreferences = {
    simplySearch: false,
    simplePurcharse: false,
    shortProductDistance: false,
    stability: false,
  }

  let comunicationPreferences: comunicationTypes;

  function getProductPreferences() {
    return productPreferences;
  }

  function getComunicationPreferences() {
    return comunicationPreferences;
  }

  function getConfortPreferences() {
    return confortPreferences;
  }
  function getShipmentPreferences() {
    return shipmentPreferences;
  }

  function getPaymentMethod() {
    return paymentPreferences;
  }

  const clientPreferences = {
    productPreferences: getProductPreferences(),
    comunicationPreferences: getComunicationPreferences(),
    confortPreferences: getConfortPreferences(),
    sihpmentPreferences: getShipmentPreferences(),
    paymentPreferences: getPaymentMethod()
  };
  Object.freeze(clientPreferences);

  return {
    setProductPreferences: function (preference: string) {
      productPreferences.push(preference);
    },
    setPaymentPreferences: function (paymentMethod: paymentTypes) {
      paymentPreferences.push(paymentMethod)
    },
    setShipmentPreferences<K extends keyof typeof shipmentPreferences>(preference: K, value: typeof shipmentPreferences[K]) {
      shipmentPreferences[preference] = value;
    },
    setEntretenimentPreferences: function (entreteniment: string) {
      entretenimentPreferences.push(entreteniment);
    },
    setConfortPreferences<K extends keyof typeof confortPreferences>(preference: K, value: typeof confortPreferences[K]): void {
      confortPreferences[preference] = value;
    },
    setComunicationPreferences: function (preference: comunicationTypes) {
      comunicationPreferences = preference;
    },
    clientPreferences: clientPreferences
  }
})();
