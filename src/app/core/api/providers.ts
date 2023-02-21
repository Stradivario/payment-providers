export enum PaymentProviders {
  'APPLEPAY' = 'APPLEPAY',
  'BANK_TRANSFER' = 'BANK_TRANSFER',
  'BITPACE' = 'BITPACE',
  'CASH' = 'CASH',
  'CASHPAY' = 'CASHPAY',
  'CASHTERMINAL' = 'CASHTERMINAL',
  'EASYPAY' = 'EASYPAY',
  'EPAY' = 'EPAY',
  'FASTPAY' = 'FASTPAY',
  'GOOGLEPAY' = 'GOOGLEPAY',
  'MASTER_CARD' = 'MASTER_CARD',
  'NETELLER' = 'NETELLER',
  'PAYSAFECARD' = 'PAY',
  'PHYRE' = 'PHYRE',
  'SKRILL' = 'SKRILL',
  'STATIA_DE_PLATA' = 'STATIA_DE_PLATA',
  'TWISTPLAY' = 'TWISTPLAY',
  'VISA' = 'VISA',
  'VOUCHER' = 'VAUCHER',
  'A1' = 'A1',
}

export const paymentProviders: Record<keyof typeof PaymentProviders, { title: string }> = {
  APPLEPAY: {
    title: 'Apple Pay',
  },
  A1: {
    title: 'A1',
  },
  BANK_TRANSFER: {
    title: 'Bank Transfer',
  },
  BITPACE: {
    title: 'Bitpace',
  },
  CASH: {
    title: 'Cash',
  },
  CASHPAY: {
    title: 'Cash Pay',
  },
  CASHTERMINAL: {
    title: 'Cash Terminal',
  },
  EASYPAY: {
    title: 'EasyPay',
  },
  EPAY: {
    title: 'Epay',
  },
  FASTPAY: {
    title: 'FastPay',
  },
  GOOGLEPAY: {
    title: 'GooglePay',
  },
  MASTER_CARD: {
    title: 'MasterCard',
  },
  NETELLER: {
    title: 'Neteller',
  },
  PAYSAFECARD: {
    title: 'PaySafeCard',
  },
  PHYRE: {
    title: 'Phyre',
  },
  SKRILL: {
    title: 'Skrill',
  },
  STATIA_DE_PLATA: {
    title: 'Statia De Plata',
  },
  TWISTPLAY: {
    title: 'Twistplay',
  },
  VISA: {
    title: 'Visa',
  },
  VOUCHER: {
    title: 'Voucher',
  },
};

export const PaymentProvidersEntries = Object.entries(paymentProviders);
