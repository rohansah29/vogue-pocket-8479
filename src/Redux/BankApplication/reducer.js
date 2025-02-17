import React from 'react'
import { ALL_USER_ERROR, ALL_USER_REQUEST, ALL_USER_SUCCESS, BANK_DATA_ERROR, BANK_DATA_REQUEST, BANK_DATA_SUCCESS, GET_LOAN_DATA_ERROR, GET_LOAN_DATA_REQUEST, GET_LOAN_DATA_SUCCESS, LOAN_DATA_ERROR, LOAN_DATA_REQUEST, LOAN_DATA_SUCCESS } from './actionTypes'


const initialState = {
    isError: false,
    isLoading: false,
    loans: [],
    allUsersError: false,
    allUsersLoading: false,
    allUsers: [],
    bankData: {}
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOAN_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOAN_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                loans: payload
            }
        }
        case LOAN_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case GET_LOAN_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_LOAN_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                loans: payload
            }
        }
        case GET_LOAN_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case BANK_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case BANK_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                bankData: payload
            }
        }
        case BANK_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case ALL_USER_REQUEST: {
            return {
                ...state,
                allUsersLoading: true,
            }
        }
        case ALL_USER_SUCCESS: {
            return {
                ...state,
                allUsersLoading: false,
                allUsers: payload
            }
        }
        case ALL_USER_ERROR: {
            return {
                ...state,
                allUsersLoading: false,
                allUsersError: true
            }
        }
        default: {
            return state
        }
    }

}
