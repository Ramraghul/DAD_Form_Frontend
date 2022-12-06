const propertiesCons = {
    name: { 
        presence: {
            allowEmpty: false,
            message: "can not be empty"
        }
    },
    label: { 
        presence: {
            allowEmpty: true,
        },
    },
    type: { 
        presence: {
            allowEmpty: false,
            message: "can not be empty"
        }
    }
};
export default propertiesCons;