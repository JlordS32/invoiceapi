const express = require('express');
const router = express.Router();
const invoices = require('./data/data.js');

const validateInvoiceData = (req, res, next) => {
	const expectedKeys = [
		'id',
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

	const IDExists = invoices.some((item) => item.id === req.body.id);
	if (IDExists) {
		return res.status(400).json({
			message: 'Cannot send an ID that already exists!',
		});
	}

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
			message: 'Cannot send a pending invoice filling all fields.',
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
router.post('/', validateInvoiceData, async (req, res) => {
	const newInvoice = req.body;
	invoices.push(newInvoice);
	return res.status(201).json({
		message: 'Invoice created successfully',
		invoice: newInvoice,
	});
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
