import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Promotion } from '../../entities/Promotion';
import PromotionService from '../../services/PromotionService';

type PromotionState = {
  promotions: Promotion[],
  promotion: Promotion
};

const initialState: PromotionState = {
  promotions: [],
  promotion: {
    BrandIconColor: "",
    BrandIconUrl: "",
    BrandPromotionCardParticipationText: "",
    Id: 0,
    ImageUrl: "",
    PromotionCardColor: "",
    RemainingText: "",
    SeoName: "",
    Title: "",
    ScenarioType: "",
    Unavailable: false,
    Unvisible: false,
    ListButtonText: "",
    Description: ""
  }
};

export const promotionService = new PromotionService();

export const getPromotions = createAsyncThunk(
  'promotions/GetPromotions',
  async () => await promotionService.GetPromotions()
);
export const getPromotion = createAsyncThunk(
  'promotions/GetPromotion',
  async (id: any) => await promotionService.GetPromotion(id)
);


export const promotionSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPromotions.pending, (state) => ({
      ...state,
      promotions: [],
    }));
    builder.addCase(getPromotions.rejected, (state, action) => ({
      ...state,
      promotions: [],
    }));
    builder.addCase(getPromotions.fulfilled, (state, action) => ({
      ...state,
      promotions: action.payload,
    }));

    builder.addCase(getPromotion.pending, (state) => ({
      ...state,
      promotion: {
        BrandIconColor: "",
        BrandIconUrl: "",
        BrandPromotionCardParticipationText: "",
        Id: 0,
        ImageUrl: "",
        PromotionCardColor: "",
        RemainingText: "",
        SeoName: "",
        Title: "",
        ScenarioType: "",
        Unavailable: false,
        Unvisible: false,
        ListButtonText: "",
        Description: ""
      },
    }));
    builder.addCase(getPromotion.rejected, (state, action) => ({
      ...state,
      promotion: {
        BrandIconColor: "",
        BrandIconUrl: "",
        BrandPromotionCardParticipationText: "",
        Id: 0,
        ImageUrl: "",
        PromotionCardColor: "",
        RemainingText: "",
        SeoName: "",
        Title: "",
        ScenarioType: "",
        Unavailable: false,
        Unvisible: false,
        ListButtonText: "",
        Description: ""
      }
    }));
    builder.addCase(getPromotion.fulfilled, (state, action) => ({
      ...state,
      promotion: action.payload,
    }));
  },
});

export default promotionSlice.reducer;
