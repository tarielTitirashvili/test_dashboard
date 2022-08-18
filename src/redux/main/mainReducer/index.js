import {
  SET_PASSED_USER_INFO_FROM_API,
  SET_USER_DATA_DETAILS,
  SET_USER_DATA_TO_INITIAL_DATA,
  SET_CORPORATE_PHONES_DATA,
  SET_CORPORATE_NUMBER_OF_RELATIVES,
} from "../../constants";

const initState = {
  basic: {
    Citizenship: "",
    OjCondition: "",
    PersonalN: "",
    Position: "",
    branch: "",
    corpMail: "",
    dateOfBirth: "",
    fullName: "",
    homes: "",
    insideN: "",
    mobile: "",
    personalMail: "",
    placeOfBirth: "",
    status: "",
  },
  identity: {
    documentN: "",
    documentType: "",
    issuingAgency: "",
    releaseDater: "",
    validFor: "",
  },
  actualAddress: {
    address: "",
    city: "",
  },
  legalAddress: {
    address: "",
    city: "",
  },
  corporatePhones: [],
  companyNumber: {
    changeDate: "",
    limit: "",
    number: "",
    serviceGroup: "",
    corporateNumberOfRelatives: [],
  },
  test: "",
};

export default function mainReducer(state = initState, action) {
  switch (action.type) {
    case SET_PASSED_USER_INFO_FROM_API:
      const {
        basic,
        identity,
        actualAddress,
        LegalAddress,
        CORPORATE_PHONES,
        companyNumber,
      } = action.person;
      return {
        ...state,
        basic: {
          Citizenship: basic.Citizenship,
          OjCondition: basic.OjCondition,
          PersonalN: basic.PersonalN,
          Position: basic.Position,
          branch: basic.branch,
          corpMail: basic.corpMail,
          dateOfBirth: basic.dateOfBirth,
          fullName: basic.fullName,
          homes: basic.homes,
          insideN: basic.insideN,
          mobile: basic.mobile,
          personalMail: basic.personalMail,
          placeOfBirth: basic.placeOfBirth,
          status: basic.status,
        },
        identity: {
          documentN: identity.documentN,
          documentType: identity.documentType,
          issuingAgency: identity.issuingAgency,
          releaseDater: identity.releaseDater,
          validFor: identity.validFor,
        },
        actualAddress: {
          address: actualAddress.address,
          city: actualAddress.city,
        },
        legalAddress: {
          address: LegalAddress.address,
          city: LegalAddress.city,
        },
        corporatePhones: [...CORPORATE_PHONES],
        companyNumber: {
          changeDate: companyNumber.changeDate,
          limit: companyNumber.limit,
          number: companyNumber.number,
          serviceGroup: companyNumber.serviceGroup,
          corporateNumberOfRelatives: [
            ...companyNumber.corporateNumberOfRelatives,
          ],
        },
      };
    case SET_USER_DATA_DETAILS:
      return {
        ...state,
        [`${action.objName}`]: {
          ...state[`${action.objName}`],
          [`${action.name}`]: action.value,
        },
      };
    case SET_USER_DATA_TO_INITIAL_DATA:
      return {
        ...initState,
      };
    case SET_CORPORATE_PHONES_DATA:
      return {
        ...state,
        corporatePhones: [...state.corporatePhones, action.newValue],
      };
    case SET_CORPORATE_NUMBER_OF_RELATIVES:
      return {
        ...state,
        companyNumber: {
          ...state.companyNumber,
          corporateNumberOfRelatives: [
            ...state.companyNumber.corporateNumberOfRelatives,
            action.data,
          ],
        },
      };
    default:
      return state;
  }
}
