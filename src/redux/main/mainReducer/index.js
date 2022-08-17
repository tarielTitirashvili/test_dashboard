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
      return {
        ...state,
        basic: {
          Citizenship: action.person.basic.Citizenship,
          OjCondition: action.person.basic.OjCondition,
          PersonalN: action.person.basic.PersonalN,
          Position: action.person.basic.Position,
          branch: action.person.basic.branch,
          corpMail: action.person.basic.corpMail,
          dateOfBirth: action.person.basic.dateOfBirth,
          fullName: action.person.basic.fullName,
          homes: action.person.basic.homes,
          insideN: action.person.basic.insideN,
          mobile: action.person.basic.mobile,
          personalMail: action.person.basic.personalMail,
          placeOfBirth: action.person.basic.placeOfBirth,
          status: action.person.basic.status,
        },
        identity: {
          documentN: action.person.identity.documentN,
          documentType: action.person.identity.documentType,
          issuingAgency: action.person.identity.issuingAgency,
          releaseDater: action.person.identity.releaseDater,
          validFor: action.person.identity.validFor,
        },
        actualAddress: {
          address: action.person.actualAddress.address,
          city: action.person.actualAddress.city,
        },
        legalAddress: {
          address: action.person.LegalAddress.address,
          city: action.person.LegalAddress.city,
        },
        corporatePhones: [...action.person.CORPORATE_PHONES],
        companyNumber: {
          changeDate: action.person.companyNumber.changeDate,
          limit: action.person.companyNumber.limit,
          number: action.person.companyNumber.number,
          serviceGroup: action.person.companyNumber.serviceGroup,
          corporateNumberOfRelatives: [
            ...action.person.companyNumber.corporateNumberOfRelatives,
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
