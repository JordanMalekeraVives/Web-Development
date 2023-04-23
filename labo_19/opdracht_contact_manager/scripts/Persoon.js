class Persoon {
    _voornaam;
    _familienaam;
    _geboortedatum;
    _email;
    _atlKinderen;

    constructor(voornaam, familienaam, geboortedatum, email, atlKinderen) {
        this._voornaam = voornaam;
        this._familienaam = familienaam;
        this._geboortedatum = geboortedatum;
        this._email = email;
        this._atlKinderen = atlKinderen;
    }

    get voornaam() {
        return this._voornaam;
    }

    set voornaam(value) {
        this._voornaam = value;
    }

    get familienaam() {
        return this._familienaam;
    }

    set familienaam(value) {
        this._familienaam = value;
    }

    get geboortedatum() {
        return this._geboortedatum;
    }

    set geboortedatum(value) {
        this._geboortedatum = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get atlKinderen() {
        return this._atlKinderen;
    }

    set atlKinderen(value) {
        this._atlKinderen = value;
    }
}