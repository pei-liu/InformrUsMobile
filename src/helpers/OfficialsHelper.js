export default class OfficialsHelper {
  getOfficials(dispatch, coords, onSuccess, onFail) {
    const { latitude, longitude } = coords;
    const url = `https://informr.us/geolookup/${latitude}&/${longitude}`;

    fetch(url)
      .then(response => { return response.json(); })
      .then(responseJSON => {
        const stateOfficials = this.extractStateOfficials(responseJSON);
        const congressOfficials = this.extractCongressOfficials(responseJSON);
        onSuccess(dispatch, stateOfficials, congressOfficials);
      })
      .catch(error => {
        onFail(dispatch, error);
      });
  }

  extractStateOfficials(officials) {
    const stateOfficials = officials.filter(o => {
      return o.level === 'state' || !o.state_name;
    });

    return stateOfficials.map(o => {
      return this.formatStateOfficial(o);
    });
  }

  extractCongressOfficials(officials) {
    const congressOfficials = officials.filter(o => {
      return o.level !== 'state' && o.state_name;
    });

    return congressOfficials.map(o => {
      return this.formatCongressOfficial(o);
    });
  }

  formatStateOfficial(official) {
    let chamberName = '';
    if (official.chamber === 'upper') {
      chamberName = 'State Senate';
    } else if (official.chamber === 'lower') {
      chamberName = 'State Assembly';
    }

    let districtOfficeAddress;
    let districtOfficePhone;
    const districtOffice = official.offices.find((office) => office.type === 'district');
    if (districtOffice) {
      districtOfficeAddress = districtOffice.address;
      districtOfficePhone = districtOffice.phone;
    }

    let capitolOfficeAddress;
    let capitolOfficePhone;
    const capitolOffice = official.offices.find(office => office.type === 'capitol');
    if (capitolOffice) {
      capitolOfficeAddress = capitolOffice.address;
      capitolOfficePhone = capitolOffice.phone;
    }

    return {
      id: official.leg_id,
      firstName: official.first_name,
      lastName: official.last_name,
      party: official.party,
      district: official.district,
      photoUrl: official.photo_url,
      photoFileName: official.photo_file_name, //pxl- REMOVE STUB
      chamber: chamberName,
      districtOfficeAddress,
      districtOfficePhone,
      capitolOfficeAddress,
      capitolOfficePhone,
      url: official.url,
    };
  }

  formatCongressOfficial(official) {
    let chamber = official.chamber;
    chamber = chamber.charAt(0).toUpperCase() + chamber.substring(1, chamber.length);

    let party = official.party;
    if (party === 'D') {
      party = 'Democrat';
    } else if (party === 'R') {
      party = 'Republican';
    }

    return {
      id: official.bioguide_id,
      firstName: official.first_name,
      lastName: official.last_name,
      party,
      district: official.district,
      photoUrl: official.photo_url,
      photoFileName: official.photo_file_name, //pxl- REMOVE STUB
      chamber,
      officeAddress: official.office,
      officePhone: official.phone,
      url: official.website
    };
  }
}
