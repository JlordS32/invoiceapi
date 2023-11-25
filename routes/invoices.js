const express = require('express');
const router = express.Router();
let invoices = [
	{
		id: 'RT3080',
		createdAt: '2021-08-18',
		paymentDue: '2021-08-19',
		description: 'Re-branding',
		paymentTerms: '1',
		clientName: 'Jensen Huang',
		clientEmail: 'jensenh@mail.com',
		status: 'paid',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom',
		},
		clientAddress: {
			street: '106 Kendell Street',
			city: 'Sharrington',
			postCode: 'NR24 5WQ',
			country: 'United Kingdom',
		},
		items: [
			{
				name: 'Brand Guidelines',
				quantity: 1,
				price: 1800.9,
			},
		],
	},
	{
		id: 'XM9141',
		createdAt: '2021-08-21',
		paymentDue: '2021-09-20',
		description: 'Graphic Design',
		paymentTerms: 30,
		clientName: 'Alex Grim',
		clientEmail: 'alexgrim@mail.com',
		status: 'pending',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom',
		},
		clientAddress: {
			street: '84 Church Way',
			city: 'Bradford',
			postCode: 'BD1 9PB',
			country: 'United Kingdom',
		},
		items: [
			{
				name: 'Banner Design',
				quantity: 1,
				price: 156,
			},
			{
				name: 'Email Design',
				quantity: 2,
				price: 200,
			},
		],
	},
	{
		id: 'RG0314',
		createdAt: '2021-09-24',
		paymentDue: '2021-10-01',
		description: 'Website Redesign',
		paymentTerms: '7',
		clientName: 'John Morrison',
		clientEmail: 'jm@myco.com',
		status: 'paid',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom',
		},
		clientAddress: {
			street: '79 Dover Road',
			city: 'Westhall',
			postCode: 'IP19 3PF',
			country: 'United Kingdom',
		},
		items: [
			{
				name: 'Website Redesign',
				quantity: 1,
				price: 14002.33,
			},
		],
	},
	{
		id: 'RT2080',
		createdAt: '2021-10-11',
		paymentDue: '2021-10-12',
		description: 'Logo Concept',
		paymentTerms: '1',
		clientName: 'Alysa Werner',
		clientEmail: 'alysa@email.co.uk',
		status: 'pending',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom',
		},
		clientAddress: {
			street: '63 Warwick Road',
			city: 'Carlisle',
			postCode: 'CA20 2TG',
			country: 'United Kingdom',
		},
		items: [
			{
				name: 'Logo Sketches',
				quantity: 1,
				price: 102.04,
			},
		],
	},
	{
		id: 'AA1449',
		createdAt: '2021-10-7',
		paymentDue: '2021-10-14',
		description: 'Re-branding',
		paymentTerms: '7',
		clientName: 'Mellisa Clarke',
		clientEmail: 'mellisa.clarke@example.com',
		status: 'pending',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom',
		},
		clientAddress: {
			street: '46 Abbey Row',
			city: 'Cambridge',
			postCode: 'CB5 6EG',
			country: 'United Kingdom',
		},
		items: [
			{
				name: 'New Logo',
				quantity: 1,
				price: 1532.33,
			},
			{
				name: 'Brand Guidelines',
				quantity: 1,
				price: 2500,
			},
		],
	},
	{
		id: 'TY9141',
		createdAt: '2021-10-01',
		paymentDue: '2021-10-31',
		description: 'Landing Page Design',
		paymentTerms: '30',
		clientName: 'Thomas Wayne',
		clientEmail: 'thomas@dc.com',
		status: 'pending',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom',
		},
		clientAddress: {
			street: '3964  Queens Lane',
			city: 'Gotham',
			postCode: '60457',
			country: 'United States of America',
		},
		items: [
			{
				name: 'Web Design',
				quantity: 1,
				price: 6155.91,
			},
		],
	},
	{
		id: 'FV2353',
		createdAt: '2021-11-05',
		paymentDue: '2021-11-12',
		description: 'Logo Re-design',
		paymentTerms: '7',
		clientName: 'Anita Wainwright',
		clientEmail: '',
		status: 'draft',
		senderAddress: {
			street: '19 Union Terrace',
			city: 'London',
			postCode: 'E1 3EZ',
			country: 'United Kingdom',
		},
		clientAddress: {
			street: '',
			city: '',
			postCode: '',
			country: '',
		},
		items: [
			{
				name: 'Logo Re-design',
				quantity: 1,
				price: 3102.04,
			},
		],
	},
	{
		id: 'FBLDI4',
		createdAt: '11-20-2023',
		paymentTerm: '30',
		paymentDue: '12-20-2023',
		items: [
			{
				id: '5c0700f5-5eab-4e4e-a4ff-08f72163d68c',
				name: 'Support Email',
				quantity: 1,
				price: 10,
			},
		],
		senderAddress: {
			street: 'Unit 13/7 Libya Place',
			city: 'Sydney',
			postCode: '2122',
			country: 'Australia',
		},
		clientName: 'Conor Goulding',
		clientEmail: 'ccgoulding24@gmail.com',
		clientAddress: {
			clientStreet: '13/2 Marsden Field, Park',
			city: 'Sydney',
			postcode: '2122',
			country: 'Australia',
		},
		description: 'Very nomnom',
		status: 'draft',
	},
];

const validateIDExists = (req, res, next) => {
	const IDExists = invoices.some((item) => item.id === req.body.id);
	if (IDExists) {
		return res.status(400).json({
			message: 'Cannot send an ID that already exists!',
		});
	}

	next();
};
const hasID = (req, res, next) => {
	if (!req.body.id) {
		return res.status(400).json({
			message: 'Cannot send an ID that already exists!',
		});
	}

	next();
};
const validateInvoiceData = (req, res, next) => {
	const expectedKeys = [
		'createdAt',
		'paymentDue',
		'description',
		'paymentTerms',
		'clientName',
		'clientEmail',
		'status',
		'senderAddress',
		'clientAddress',
		'items',
	];

	// Add additional validation for the status field
	const validStatusValues = ['draft', 'paid', 'pending']; // Add other valid values if needed
	if (!validStatusValues.includes(req.body.status)) {
		return res.status(400).json({
			message: 'Invalid status value. Allowed values: draft, paid, pending.',
		});
	}

	const isValidInvoice = expectedKeys.every((key) =>
		req.body.hasOwnProperty(key)
	);

	if (req.body.status === 'pending' && !isValidInvoice) {
		return res.status(400).json({
			message: 'Cannot send a pending invoice without filling all fields.',
		});
	}

	next();
};

router.get('/', async (_, res) => {
	return res.status(200).json({
		invoices: invoices,
	});
});

// GET invoice by ID
router.get('/:id', async (req, res) => {
	const invoiceId = req.params.id;
	const invoice = invoices.find((inv) => inv.id === invoiceId);

	if (invoice) {
		return res.status(200).json({
			invoice: invoice,
		});
	} else {
		return res.status(404).json({
			message: 'Invoice not found',
		});
	}
});

// POST new invoice
router.post(
	'/',
	hasID,
	validateIDExists,
	validateInvoiceData,
	async (req, res) => {
		const newInvoice = req.body;
		invoices.push(newInvoice);
		return res.status(201).json({
			message: 'Invoice created successfully',
			invoice: newInvoice,
		});
	}
);

// POST new invoice by ID
router.post('/:id', validateInvoiceData, async (req, res) => {
	const invoiceId = req.params.id;
	const updatedInvoice = req.body;

	// Check if req.body.id exists
	if (updatedInvoice.id) {
		return res.status(400).json({
			message: 'Updating ID is not allowed!',
		});
	}

	// Find the index of the invoice with the specified ID
	const index = invoices.findIndex((inv) => inv.id === invoiceId);

	if (index !== -1) {
		// Update the existing invoice with the new data
		invoices[index] = { ...invoices[index], ...updatedInvoice };

		return res.status(200).json({
			message: 'Invoice updated successfully',
			invoice: invoices[index],
		});
	} else {
		return res.status(404).json({
			message: 'Invoice not found',
		});
	}
});

// DELETE invoice by ID
router.delete('/:id', async (req, res) => {
	const invoiceId = req.params.id;
	const index = invoices.findIndex((inv) => inv.id === invoiceId);
	if (index !== -1) {
		invoices.splice(index, 1);
		return res.status(200).json({
			message: 'Invoice deleted successfully',
		});
	} else {
		return res.status(404).json({
			message: 'Invoice not found',
		});
	}
});

module.exports = router;
