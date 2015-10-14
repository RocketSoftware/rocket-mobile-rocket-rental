var app = RocketMobileApplication.getEntity("App").getValue();
var license_managers = JSON.parse(app.LicenseManagers);
var centipede = license_managers[0];

RocketMobileApplication.getEntity("Centipede").setValue(centipede);

