import flightsByRouteMock from "@mocks/OrigenDestinoResponse.json"
import flightsByNumberMock from "@mocks/NumerodeVueloResponse.json"

type FlightStatus = typeof flightsByRouteMock.flightStatusCollection[0];

export const getFlightsByRoute = async (
  origin: string,
  destination: string,
  departureDate: Date
): Promise<FlightStatus[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const formatted = departureDate.toISOString().slice(0, 19);
  const flightDepartureDate = formatted?.toString()?.split('T')[0];
  return flightsByRouteMock.flightStatusCollection.filter(flight => {
    const flightDate = flight.segment.departureDateTime.split('T')[0];
    return (
      flight.segment.departureAirport === origin &&
      flight.segment.arrivalAirport === destination &&
      flightDate === flightDepartureDate
    );
  });
};

export const getFlightByNumber = async (
  searchText: string,
  departureDate: Date
): Promise<FlightStatus[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const normalizedSearch = searchText.toUpperCase().replace(/\s+/g, '').trim();
  const formatted = departureDate.toISOString().slice(0, 19);
  return flightsByNumberMock.flightStatusCollection.filter(flight => {
    const flightDate = flight.segment.departureDateTime.split('T')[0];
    const flightDepartureDate = formatted?.toString()?.split('T')[0];
    const fullFlightCode = `${flight.segment.operatingCarrier}${flight.segment.operatingFlightCode}`.toUpperCase();
    return (
      fullFlightCode.includes(normalizedSearch) &&
      flightDate === flightDepartureDate
    );
  });
};
