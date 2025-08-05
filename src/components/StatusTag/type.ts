export type StatusProps = {
  status: string = 'ARRIVED' | 'DELAYED' | 'ON_TIME';
  isDetail?: boolean;
}