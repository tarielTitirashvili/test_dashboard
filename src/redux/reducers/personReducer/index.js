import { GET_PASSED_USER_INFO_FROM_API, SET_USER_BASIC_DETAILS } from "../../constants";

const initState = {
  person: [],
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
};

export default function personReducer(state = initState, action) {
  switch (action.type) {
    case GET_PASSED_USER_INFO_FROM_API:
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
      };
      case SET_USER_BASIC_DETAILS:
      return {
        ...state,
        basic: {
          ...state.basic,
          [`${action.name}`]: action.value,
        },
      };
    default:
      return state;
  }
}
