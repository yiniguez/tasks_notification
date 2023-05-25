import Channel from "../models/Channel.js";

export const getChannels = async (req, res) => {
  const channel = await Channel.find();
  return res.json(channel);
};
