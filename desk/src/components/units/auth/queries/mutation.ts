import {gql} from "@apollo/client";

export const CREATE_USER = gql`
	mutation createUser($createUserInput: CreateUserInput!) {
		createUser(createUserInput: $createUserInput){
				id email nickName jobGroup provider
		}
	}
`

export const AUTH_EMAIL = gql`
	mutation authEmail($email: String!) {
		authEmail(email: $email)
	}
`

export const MATCH_AUTH_NUMBER = gql`
	mutation matchAuthNumber($matchAuthInput: MatchAuthInput!) {
    matchAuthNumber(matchAuthInput: $matchAuthInput)
	}
`

export const LOGIN = gql`
	mutation login($loginInput: LoginInput!) {
  	login(loginInput: $loginInput)
	}
`

export const LOGOUT = gql`
	mutation {
		logOut
	}
`

export const SIGNOUT = gql`
    mutation {
        deleteUser
    }
`

