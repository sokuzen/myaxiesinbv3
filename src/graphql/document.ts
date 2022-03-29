import { gql } from "@apollo/client/core";

export const GET_AXIE_DETAIL = gql`
    query GetAxieDetail($axieId: ID!) {
        axie(axieId: $axieId) {
        ...AxieDetail
        __typename
        }
    }

    fragment AxieDetail on Axie {
        id
        image
        parts {
        ...AxiePart
        __typename
        }  
        __typename
    }

    fragment AxiePart on AxiePart {
        id
        name
        class
        type
        stage
        abilities {
        ...AxieCardAbility
        __typename
        }
        __typename
    }

    fragment AxieCardAbility on AxieCardAbility {
        id
        name
        attack
        defense
        energy
        description
        backgroundUrl
        effectIconUrl
        __typename
    }
`;