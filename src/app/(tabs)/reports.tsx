import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const incomeSources = [
  {
    id: 1,
    title: 'Primary Salary',
    subtitle: 'Direct Deposit',
    amount: '₹4,200.00',
    icon: 'wallet-outline',
  },
  {
    id: 2,
    title: 'Freelance & Side Gig',
    subtitle: 'Client Invoices',
    amount: '₹650.00',
    icon: 'laptop-outline',
  },
]

const expenses = [
  {
    id: 1,
    title: 'Housing & Rent',
    transactions: '1 transaction',
    amount: '₹1,400.00',
    percentage: '41%',
    icon: 'home-outline',
  },
  {
    id: 2,
    title: 'Food & Groceries',
    transactions: '14 transactions',
    amount: '₹680.00',
    percentage: '20%',
    icon: 'restaurant-outline',
  },
  {
    id: 3,
    title: 'Shopping & Leisure',
    transactions: '6 transactions',
    amount: '₹670.00',
    percentage: '20%',
    icon: 'bag-outline',
  },
  {
    id: 4,
    title: 'Transport',
    transactions: '9 transactions',
    amount: '₹390.00',
    percentage: '11%',
    icon: 'car-outline',
  },
  {
    id: 5,
    title: 'Utilities & Bills',
    transactions: '4 transactions',
    amount: '₹280.00',
    percentage: '8%',
    icon: 'flash-outline',
  },
]

export default function Reports() {

  const [period, setPeriod] = useState('Month')

  return (
    <View className="flex-1 bg-black">

      <SafeAreaView className="flex-1">

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >

          {/* Header */}

          <View className="px-5 mt-4">

            <Text className="text-white text-4xl font-bold">
              Monthly Report
            </Text>

            <Text className="text-gray-400 text-lg mt-1">
              Understand your financial activity
            </Text>

          </View>


          {/* Month Selector */}

          <View className="mx-5 mt-6 flex-row items-center justify-between">

            <Pressable className="w-10 h-10 rounded-full items-center justify-center">
              <Ionicons
                name="chevron-back"
                size={24}
                color="#94a3b8"
              />
            </Pressable>

            <Text className="text-white text-lg font-semibold">
              September 2025
            </Text>

            <Pressable className="w-10 h-10 rounded-full items-center justify-center">
              <Ionicons
                name="chevron-forward"
                size={24}
                color="#94a3b8"
              />
            </Pressable>

          </View>


          {/* Week / Month / Year */}

          <View className="mx-5 mt-5 h-12 bg-gray-900 rounded-xl p-1 flex-row">

            {['Week', 'Month', 'Year'].map((item) => (

              <Pressable
                key={item}
                onPress={() => setPeriod(item)}
                className={`flex-1 rounded-lg items-center justify-center ${
                  period === item ? 'bg-green-400' : ''
                }`}
              >

                <Text
                  className={`font-medium ${
                    period === item
                      ? 'text-black'
                      : 'text-gray-400'
                  }`}
                >
                  {item}
                </Text>

              </Pressable>

            ))}

          </View>


          {/* Balance Overview */}

          <View className="mx-5 mt-7 bg-gray-950 border border-gray-800 rounded-2xl p-5">

            <View className="flex-row items-center justify-between">

              <Text className="text-gray-300 text-base font-semibold">
                BALANCE OVERVIEW
              </Text>

              <View className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30">

                <Text className="text-green-400 text-xs">
                  ● Active {period}
                </Text>

              </View>

            </View>


            <View className="flex-row mt-7">

              {/* Income */}

              <View className="flex-1">

                <Text className="text-gray-400">
                  Total Income
                </Text>

                <Text className="text-green-400 text-2xl font-bold mt-1">
                  ₹4,850.00
                </Text>

                <Text className="text-green-400 text-xs mt-2">
                  Earned
                </Text>

              </View>


              {/* Expense */}

              <View className="flex-1">

                <Text className="text-gray-400">
                  Total Spent
                </Text>

                <Text className="text-white text-2xl font-bold mt-1">
                  ₹3,420.00
                </Text>

                <Text className="text-red-400 text-xs mt-2">
                  70.5% used
                </Text>

              </View>


              {/* Remaining */}

              <View className="flex-1">

                <Text className="text-gray-400">
                  Remaining
                </Text>

                <Text className="text-green-400 text-2xl font-bold mt-1">
                  ₹1,430.00
                </Text>

                <Text className="text-gray-400 text-xs mt-2">
                  29.5% left
                </Text>

              </View>

            </View>


            {/* Budget Usage */}

            <View className="mt-7">

              <View className="flex-row justify-between">

                <Text className="text-gray-400">
                  Budget Usage
                </Text>

                <Text className="text-gray-300">
                  70.5% spent
                </Text>

              </View>

              <View className="h-2 bg-gray-800 rounded-full mt-3 overflow-hidden">

                <View
                  className="h-full bg-green-400 rounded-full"
                  style={{ width: '70.5%' }}
                />

              </View>

              <Text className="text-gray-500 text-xs mt-2">
                29.5% remaining
              </Text>

            </View>

          </View>


          {/* Add Buttons */}

          <View className="mx-5 mt-6 flex-row gap-3">

            <Pressable onPress={()=>router.push("/addexpense")} className="flex-1 h-14 rounded-xl border border-gray-800 bg-gray-950 flex-row items-center justify-center">

              <Ionicons
                name="remove-circle-outline"
                size={22}
                color="#f87171"
              />

              <Text className="text-white ml-2 font-semibold">
                Add Expense
              </Text>

            </Pressable>


            <Pressable onPress={()=>router.push("/addincome")}  className="flex-1 h-14 rounded-xl border border-green-500/30 bg-green-500/10 flex-row items-center justify-center">

              <Ionicons
                name="add-circle-outline"
                size={22}
                color="#22c55e"
              />

              <Text className="text-green-400 ml-2 font-semibold">
                Add Income
              </Text>

            </Pressable>

          </View>


         

          {/* Category Expenses */}

          <View className="mx-5 mt-9">

            <View className="flex-row justify-between items-center">

              <Text className="text-gray-300 text-base font-semibold">
                CATEGORY-WISE EXPENSES
              </Text>

              <Text className="text-gray-500 text-xs">
                34 Transactions
              </Text>

            </View>


            <View className="bg-gray-950 border border-gray-800 rounded-2xl mt-4 p-4">

              {expenses.map((item, index) => (

                <View
                  key={item.id}
                  className={`py-4 ${
                    index !== expenses.length - 1
                      ? 'border-b border-gray-800'
                      : ''
                  }`}
                >

                  <View className="flex-row items-center">

                    <View className="w-11 h-11 rounded-xl bg-green-500/10 items-center justify-center">

                      <Ionicons
                        name={item.icon as any}
                        size={22}
                        color="#22c55e"
                      />

                    </View>


                    <View className="flex-1 ml-4">

                      <Text className="text-white text-base font-medium">
                        {item.title}
                      </Text>

                      <Text className="text-gray-500 text-sm mt-1">
                        {item.transactions}
                      </Text>

                    </View>


                    <View className="items-end">

                      <Text className="text-white text-base font-semibold">
                        {item.amount}
                      </Text>

                      <Text className="text-gray-500 text-xs mt-1">
                        {item.percentage} of spend
                      </Text>

                    </View>

                  </View>


                  {/* Progress */}

                  <View className="h-1.5 bg-gray-800 rounded-full mt-3 overflow-hidden">

                    <View
                      className="h-full bg-green-400 rounded-full"
                      style={{
                        width: item.percentage,
                      }}
                    />

                  </View>

                </View>

              ))}

            </View>

          </View>


          {/* Export */}

          <Pressable className="mx-5 mt-8 h-14 rounded-xl border border-gray-800 bg-gray-950 flex-row items-center justify-center">

            <Ionicons
              name="download-outline"
              size={21}
              color="#22c55e"
            />

            <Text className="text-gray-200 ml-3 font-semibold">
              Export Report (CSV / PDF)
            </Text>

          </Pressable>

        </ScrollView>

      </SafeAreaView>

    </View>
  )
}