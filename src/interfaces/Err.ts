export interface Err extends Error {
  status: number
  data?: any
}
