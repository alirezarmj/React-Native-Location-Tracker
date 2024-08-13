import axios from "axios";

export class MeteoAPI {
  static async fetchAddressByCoords(coords) {
    const {
      address: { city, town, village },
    } = (
      await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}`, {
        headers: {
          "accept-language": "en-US", // Set the language to English
        },
      })
    ).data;
    return city || town || village;
  }
}
