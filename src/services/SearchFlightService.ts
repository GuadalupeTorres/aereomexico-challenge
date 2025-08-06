import flightsByRouteMock from "@mocks/OrigenDestinoResponse.json"
import flightsByNumberMock from "@mocks/NumerodeVueloResponse.json"

type FlightStatus = typeof flightsByRouteMock.flightStatusCollection[0];

export const getFlightsByRoute = async (
  origin: string,
  destination: string,
  departureDate: string
): Promise<FlightStatus[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return flightsByRouteMock.flightStatusCollection.filter(flight => {
    const flightDate = flight.segment.departureDateTime.split('T')[0];
    return (
      flight.segment.departureAirport === 'MEX' &&
      flight.segment.arrivalAirport === 'CUN' &&
      flightDate === "2023-11-21"
    );
  });
};

export const getFlightByNumber = async (
  searchText: string,
  departureDate: string
): Promise<FlightStatus[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const normalizedSearch = searchText.toUpperCase().replace(/\s+/g, '').trim();

  return flightsByNumberMock.flightStatusCollection.filter(flight => {
    const flightDate = flight.segment.departureDateTime.split('T')[0];
    const fullFlightCode = `${flight.segment.operatingCarrier}${flight.segment.operatingFlightCode}`.toUpperCase();

    return (
      fullFlightCode.includes(normalizedSearch) &&
      flightDate === "2023-11-21"
    );
  });
};
