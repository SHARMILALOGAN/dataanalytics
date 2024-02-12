const userModel = require('../models/userModel');

const query1Controller = async (req, res) => {
  const { startDate, endDate,d_vehicletype,d_tollid1} = req.query;
  const startYear = new Date(startDate).getFullYear();
  const endYear = new Date(endDate).getFullYear();

  try {
    const result = await userModel.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $gte: [{ $year: { $toDate: '$d_year' } }, startYear] },
              { $lte: [{ $year: { $toDate: '$d_year' } }, endYear] },
            ],
          },
        },
      },
      {
        $match: {
          d_vehicletype: d_vehicletype,
          d_tollid1:d_tollid1,
        },
      },
      {
        $group: {
          _id: {
            toll: '$d_tollid1',
            vehicletype: '$d_vehicletype'
          },
          count: { $sum: { $toDouble: '$d_amtoll1' } },
        },
      },
      {
        
          $project: {
            startYear: startYear, // Project the startYear
            endYear: endYear, // Project the endYear
            toll: '$_id.toll',
            vehicletype: '$_id.vehicletype', // Project the vehicletype
            count: 1,
            _id: 0 
        }
      }
    ]);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = { query1Controller };
