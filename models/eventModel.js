const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    day: {
        type: Number,
        required: true,
    },
    endDate: {
        type: Date,
        required: true
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],
    firstName: {
        isVisible: {
            type: Boolean,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: true
        }
    },
    lastName: {
        isVisible: {
            type: Boolean,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: true
        }
    },
    email: {
        isVisible: {
            type: Boolean,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: true
        }
    },
    scholarId: {
        isVisible: {
            type: Boolean,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: true
        }
    },
    address: {
        isVisible: {
            type: Boolean,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: true
        }
    },
    payment: {
        isVisible: {
            type: Boolean,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: true
        }
    }
})

module.exports = mongoose.model("Event", eventSchema);