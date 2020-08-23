export interface Read {
  responseDataToEntity(data: any): any,
}

export interface Write {
  fromEntityToRequestData(data: any): any,
}