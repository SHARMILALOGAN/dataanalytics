
const userModel = require('../models/userModel');

const query2Controller = async (req, res) => {
  const { startDate, endDate,d_vehicletype,d_tollid2} = req.query;
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
          d_tollid2: d_tollid2,
          d_vehicletype:d_vehicletype,
        },
      },
      {
        $group: {
          _id: {
            tollid: '$d_tollid2',
            vehicletype: '$d_vehicletype'
          }, 
          count: { $sum:1},
        },
      },
      {
        
          $project: {
            startYear: startYear, // Project the startYear
            endYear: endYear, // Project the endYear
            tollid: '$_id.tollid',
            vehicletype: '$_id.vehicletype', 
            count: 1, 
            _id: 0 
        }
      }
    ]);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
};

module.exports = { query2Controller };

