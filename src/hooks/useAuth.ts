import React, { createContext, useContext, useEffect } from "react"
import { AuthContext } from '../contexts/AuthContext'

export function useAuth() {
  const value = useContext(AuthContext)

  return value;
}