export default class Address {
	name = '';
	phone = '';
	address = '';
	latitude = 0;
	longitude = 0;

	getFormState() {
		return {
			name: this.name,
			phone: this.phone,
			address: this.address,
			latitude: this.latitude,
			longitude: this.longitude,
		}
	}
}
