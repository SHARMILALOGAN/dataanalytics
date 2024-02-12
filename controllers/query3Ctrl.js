const userModel = require('../models/userModel');

const query3Controller = async (req, res) => {
  const { startDate, endDate,d_tollid3,d_tollid2,d_tollid1,d_vehicleid} = req.query;
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
      {$match:{$or:[{d_tollid1:d_tollid1},{d_tollid2:d_tollid2},{d_tollid3:d_tollid3}],d_vehicleid:d_vehicleid}},
{$group:{_id:'$d_vehicleid',count:{$sum:1}}},
{$project:{_id:0,"d_vehicleid":1,count:1}}])
      /*{
        $match: {
          $or:[{d_tollid1:d_tollid1},{d_tollid2:d_tollid2},{d_tollid3:d_tollid3}],d_vehicleid:d_vehicleid}},
      {
        $group: {
          _id: {
            vehicleid: '$d_vehicleid',count:{$sum:1}}},
          /*  toll: '$d_tollid3',
            toll1:'$d_tollid2',
            toll2:'$d_tollid1',
          }, 
          count: { $sum: 1 }, 
        },
      },
    }
      {
        
          $project: {
            startYear: startYear, // Project the startYear
            endYear: endYear, // Project the endYear
            toll: '$_id.toll1',
            vehicleid: '$_id.vehicleid', 
            count: 1, 
            _id: 0 
        }
      }
    ]);*/

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = { query3Controller };
